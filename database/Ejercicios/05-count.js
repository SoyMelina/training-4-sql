const Database = require('better-sqlite3');
const db = new Database('database/training.db');

const result = db.prepare(`
  SELECT COUNT(*) as total
  FROM users
`).get();

console.log(result);

db.close();