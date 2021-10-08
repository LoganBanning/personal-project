require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET  } = process.env;
const session = require('express-session');


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
}))

app.listen(PORT, () => console.log(`running on ${PORT}`));