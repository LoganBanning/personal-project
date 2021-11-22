INSERT INTO ape_users
(firstName, lastName, email, password, phoneNumber)
VALUES
($1, $2, $3, $4, $5)
returning *;