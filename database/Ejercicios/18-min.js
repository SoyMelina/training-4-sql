const Database = require('better-sqlite3');
const db = new Database('database/training.db');
const result = db.prepare(`
  SELECT MIN(price) as precio_minimo
  FROM orders
`).get();

console.log(result);

db.close();