const Database = require('better-sqlite3');
const db = new Database('database/training.db');
const result = db.prepare(`
  SELECT
    users.name,
    orders.product
  FROM users
  LEFT JOIN orders
    ON users.id = orders.user_id
`).all();

console.log(result);

db.close();