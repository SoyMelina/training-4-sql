const Database = require('better-sqlite3');
const db = new Database('database/training.db');
const result = db.prepare(`
  SELECT MAX(price) as precio_maximo
  FROM orders
`).get();

console.log(result);

db.close();