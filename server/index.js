require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET  } = process.env;
const session = require('express-session');
const productsCtrl = require('./controllers/products');
const addToProCtrl = require('./controllers/addToCart');
const addSub = require('./controllers/addSub');
const login = require('./controllers/user');
const signUp = require('./controllers/user');
const updateUser = require('./controllers/user');
const deleteUser = require('./controllers/user');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);



const app = express();

const PORT = SERVER_PORT

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  }
  }).then((db) => {
    app.set('db', db)
    console.log('DB Ready')
});

app.use(session({
  resave: true,
  saveUninitialized: false,
  secret: SESSION_SECRET, 
  cookie: { maxAge: 1000 * 60 * 24 * 30 },
}));

app.get("/api/products/:gender", productsCtrl.getProducts);
app.get('/api/cart_items/:id', addToProCtrl.addToCart);
app.get('/api/allproducts', productsCtrl.getAllProducts);
app.post('/api/subscribers', addSub.subscribe);
app.post('/api/login', login.login);
app.post('/api/signup',signUp.signUp);
app.put('/api/updateuser', updateUser.updateUser);
app.delete('/api/deleteuser/:email', deleteUser.deleteUser);  
app.post('/api/payment', async(req, res) => {
  let {amount, id} = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'apparel',
      payment_method: id,
      confirm: true,
    })
    res.json({
      message: 'payment successful',
      success: true,
    })
  } catch (e) {
    res.json({
      message: 'payment failed',
      success: false,
    })
  }
})

app.listen(PORT, () => console.log(`running on ${PORT}`));