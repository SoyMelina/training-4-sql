const Database = require('better-sqlite3');
const db = new Database('database/training.db');

const result = db.prepare(`
  SELECT
    users.name,
    SUM(orders.price) as total_gastado
  FROM users
  JOIN orders
    ON users.id = orders.user_id
  GROUP BY users.name
`).all();

console.log(result);

db.close();