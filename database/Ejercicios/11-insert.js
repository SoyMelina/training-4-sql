const Database = require('better-sqlite3');
const db = new Database('database/training.db');
const insertUser = db.prepare(`
  INSERT INTO users (name, email, status)
  VALUES (?, ?, ?)
`);

insertUser.run('Lucia', 'lucia@test.com', 'Activo');

const result = db.prepare(`
  SELECT *
  FROM users
  WHERE name = 'Lucia'
`).get();

console.log(result);

db.close();