const Database = require('better-sqlite3');
const db = new Database('database/training.db');
const result = db.prepare(`
  SELECT *
  FROM users
  WHERE name LIKE 'M%'
`).all();

console.log(result);

db.close();