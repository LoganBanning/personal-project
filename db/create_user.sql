INSERT INTO ape_users
(firstName, lastName, email, password)
VALUES
($1, $2, $3, $4)
returning *;