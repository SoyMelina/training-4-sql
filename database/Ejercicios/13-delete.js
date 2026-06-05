const Database = require('better-sqlite3');
const db = new Database('database/training.db');

db.prepare(`
  DELETE FROM users
  WHERE name = 'Lucia'
`).run();

const result = db.prepare(`
  SELECT *
  FROM users
  WHERE name = 'Lucia'
`).get();

console.log(result);

db.close();