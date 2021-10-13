

const addToCart = async (req, res) => {
  const { id, name, type, price, color, gender, imgurl } = req.body;
  const db = req.app.get('db');
  const  { quantity } = req.params['quantity'];
  const result = await db.cart_items.find_product_by_id([id]);
  const existingProduct = result[0];
  if(existingProduct){
    const updateQuantity = await db.cart_items.where(`quantity LIKE $1`, [quantity])
  }
};

const cart = async (req, res) => {
 
};

module.exports = {
  addToCart,
  cart,
};