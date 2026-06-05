const Database = require('better-sqlite3');
const db = new Database('database/training.db');

const result = db.prepare(`
  SELECT *
  FROM users
  ORDER BY name
`).all();

console.log(result);

db.close();