const Database = require('better-sqlite3');
const db = new Database('database/training.db');
const result = db.prepare(`
  SELECT AVG(price) as promedio
  FROM orders
`).get();

console.log(result);

db.close();