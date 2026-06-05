const Database = require('better-sqlite3');
const db = new Database('database/training.db');
const result = db.prepare(`
  SELECT
    users.name
  FROM users
  LEFT JOIN orders
    ON users.id = orders.user_id
  WHERE orders.product IS NULL
`).all();

console.log(result);

db.close();