INSERT INTO products 
(name, type, price, color, gender, imgurl)
VALUES 
($1, $2, $3, $4, $5, $6)
returning *;