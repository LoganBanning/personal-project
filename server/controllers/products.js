// endpoint: post product

module.exports = {

  getProducts: async (req, res) => {
    const db = await req.app.get('db')
    const gender = req.params['gender']; // api/products/mens


    // query products table WHERE type == type we got
    const results = await db.products.where(`gender ILIKE $1`, [gender]);;

    return res.status(200).send(results);
  },

  getAllProducts: async (req, res) => {
    const db = await req.app.get('db');
    const results = await db.products;

    return res.status(200).send(results);
  },

  addProduct: async (req, res) => {
    // pull product off of request body
    const db = await req.app.get('db');
    const { id } = req.session.user || {};
    const { name, type, price, color, gender, imgurl } = req.body;
    if(id){
      db.product.add_product([id, name, type, price, color, gender, imgurl])
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }

    // use the massive insert function
    // const { }
    const insert = await db.body.products.insert('products')
    // some validation maybe? Make sure it has a gender? Anything else required?
    // return appropriate status code
  },

  deleteProduct: (req, res) => {
    req.app.get('db').product.delete_product(req.params.id)
    .then(_ => res.sendStatus(200))
    .catch((e) => console.log(e))
  }
}