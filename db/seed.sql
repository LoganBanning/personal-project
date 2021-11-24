CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(50),
type VARCHAR(30),
price VARCHAR(10),
color VARCHAR(20),
gender VARCHAR(10),
imgurl TEXT
);


CREATE TABLE shopping_cart (
id SERIAL PRIMARY KEY,
userId INTEGER REFERENCES ape_users(id)
);

CREATE TABLE ape_users (
id SERIAL PRIMARY KEY,
firstName VARCHAR(50) NOT NULL,
lastName VARCHAR(50) NOT NULL,
email VARCHAR(75) NOT NULL,
password TEXT NOT NULL
);

CREATE TABLE cart_items (
id SERIAL PRIMARY KEY,
cartId INTEGER REFERENCES shopping_cart(id),
productId INTEGER REFERENCES products(id),
quantity INTEGER
);


INSERT INTO products
(name, type, price, color, gender, imgurl)
VALUES
('cool shirt', 't-shirt', '$19.99', 'blue', 'mens', 'https://images.boardriders.com/globalGrey/quiksilver-products/all/default/medium-large2/eqykt04093_quiksilver,w_bpy0_frt1.jpg');

CREATE TABLE subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT
);

CREATE TABLE transactons (
  id SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES products (id),
  userId INTEGER REFERENCES ape_users(id),
  orderNumber INT
);
