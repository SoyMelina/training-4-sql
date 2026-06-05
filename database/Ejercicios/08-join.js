const Database = require('better-sqlite3');
const db = new Database('database/training.db');

const result = db.prepare(`
  SELECT
    users.name,
    orders.product,
    orders.price
  FROM users
  JOIN orders
    ON users.id = orders.user_id
`).all();

console.log(result);

db.close();