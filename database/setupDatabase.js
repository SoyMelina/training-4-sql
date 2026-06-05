const Database = require('better-sqlite3');

const db = new Database('database/training.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    status TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    product TEXT NOT NULL,
    price REAL NOT NULL,

    FOREIGN KEY(user_id) REFERENCES users(id)
  );
`);

const insertOrder = db.prepare(`
  INSERT INTO orders (user_id, product, price)
  VALUES (?, ?, ?)
`);

insertOrder.run(1, 'Notebook', 1000);
insertOrder.run(1, 'Mouse', 50);
insertOrder.run(2, 'Teclado', 80);