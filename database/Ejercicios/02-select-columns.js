const Database = require('better-sqlite3');
const db = new Database('database/training.db');

const result = db.prepare(`
  SELECT name, email
  FROM users
`).all();

console.log(result);

db.close();