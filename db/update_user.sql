UPDATE ape_users
SET firstname = $2, lastname = $3, email = $4
WHERE id = $1
returning *;