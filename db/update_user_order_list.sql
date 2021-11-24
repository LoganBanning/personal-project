SELECT ape_users.id, transactons.userId
FROM transactions
INNER JOIN ape_users ON ape_users.id = transactons.userId;