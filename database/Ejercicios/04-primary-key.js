const Database = require('better-sqlite3');
const db = new Database('database/training.db');

const result = db.prepare(`
  SELECT *
  FROM users
  WHERE id = 1
`).get();

console.log(result);

db.close();