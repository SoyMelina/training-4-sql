01 - SELECT //  node database/Ejercicios/01-select.js
//Permite consultar información de una tabla.
Ejemplo:
SELECT *
FROM users;
Devuelve todos los registros y columnas de la tabla.
//---------------------------------------------------------------------
02 - SELECT columnas específicas  //  node database/Ejercicios/02-select-columns.js
//Permite consultar únicamente las columnas necesarias.
Ejemplo:
SELECT name, email
FROM users;
Devuelve solamente el nombre y el email de cada usuario.
//---------------------------------------------------------------------
03 - WHERE //  node database/Ejercicios/03-where.js
Permite filtrar registros según una condición.
Ejemplo:
SELECT *
FROM users
WHERE name = 'Melina';
Devuelve únicamente los usuarios que cumplen la condición indicada.
//---------------------------------------------------------------------
04 - PRIMARY KEY // node database/Ejercicios/04-primary-key.js
Identifica de forma única cada registro dentro de una tabla.
Ejemplo:
SELECT *
FROM users
WHERE id = 1;
La columna id no puede repetirse y permite localizar un registro específico.
//---------------------------------------------------------------------
05 - COUNT // node database/Ejercicios/05-count.js
Permite contar la cantidad de registros.
Ejemplo:
SELECT COUNT(*)
FROM users;
Devuelve el total de registros existentes en la tabla.
//---------------------------------------------------------------------
06 - ORDER BY // node database/Ejercicios/06-orderby.js
Permite ordenar los resultados de una consulta.
Ejemplo:
SELECT *
FROM users
ORDER BY name;
Ordena los registros de forma ascendente (A-Z).
También puede utilizarse:
ORDER BY name DESC;
para ordenar de forma descendente (Z-A).
//---------------------------------------------------------------------
07 - NULL
Representa la ausencia de un valor en una columna.
Ejemplo:
SELECT *
FROM users
WHERE email IS NULL;
Devuelve los registros que no tienen información cargada en el campo email.
//---------------------------------------------------------------------
07 - NULL // node database/Ejercicios/07-null.js
Permite combinar información de dos o más tablas relacionadas.
Ejemplo:
SELECT users.name, orders.product
FROM users
JOIN orders
ON users.id = orders.user_id;
Devuelve información unificada proveniente de ambas tablas.
//---------------------------------------------------------------------
08 - JOIN // node database/Ejercicios/07-null.js
Permite sumar valores numéricos.
Ejemplo:
SELECT SUM(price)
FROM orders;
Devuelve la suma total de los precios almacenados.
//---------------------------------------------------------------------
09 - SUM // node database/Ejercicios/09-sum.js
Permite sumar valores numéricos.
Ejemplo:
SELECT SUM(price)
FROM orders;
Devuelve la suma total de los precios almacenados.
//---------------------------------------------------------------------
10 - GROUP BY // node database/Ejercicios/10-groupby.js
Permite agrupar registros y aplicar funciones como SUM o COUNT sobre cada grupo.
Ejemplo:
SELECT users.name,
       SUM(orders.price)
FROM users
JOIN orders
ON users.id = orders.user_id
GROUP BY users.name;
Devuelve el total gastado por cada usuario.
//---------------------------------------------------------------------
11 - INSERT
Permite crear nuevos registros en una tabla.
Ejemplo:
INSERT INTO users (name, email, status)
VALUES ('Lucia', 'lucia@test.com', 'Activo');
Agrega un nuevo usuario a la tabla users.
//---------------------------------------------------------------------
12 - UPDATE
Permite modificar registros existentes.
Ejemplo:
UPDATE users
SET status = 'Inactivo'
WHERE name = 'Lucia';
Actualiza el estado del usuario Lucia.
Importante: siempre utilizar WHERE para evitar modificar todos los registros de la tabla.
//---------------------------------------------------------------------
13 - DELETE
Permite eliminar registros de una tabla.
Ejemplo:
DELETE FROM users
WHERE name = 'Lucia';
Elimina el usuario Lucia de la tabla users.
Importante: siempre utilizar WHERE para evitar eliminar todos los registros de la tabla.
//---------------------------------------------------------------------
14 - LEFT JOIN
Permite obtener todos los registros de la tabla principal, incluso si no tienen coincidencias en la tabla relacionada.
Ejemplo:
SELECT users.name, orders.product
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
Devuelve todos los usuarios, incluyendo aquellos que no tienen pedidos asociados.
//---------------------------------------------------------------------
15 - LEFT JOIN + IS NULL
Permite identificar registros que no tienen relación con otra tabla.
Ejemplo:
SELECT users.name
FROM users
LEFT JOIN orders
ON users.id = orders.user_id
WHERE orders.product IS NULL;
Devuelve únicamente los usuarios que no tienen pedidos registrados.
Este tipo de consulta es muy utilizada para detectar datos faltantes, inconsistencias o relaciones incompletas entre tablas.
//---------------------------------------------------------------------