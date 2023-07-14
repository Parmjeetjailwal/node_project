# Readme

## Please run the following command to create the database and table on mysql server before run the app.js
* CREATE DATABASE employees_db
* USE employees_db
* CREATE TABLE IF NOT EXISTS `EMPLOYEES` (
   emp_id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
   emp_name varchar(255) NOT NULL,
   emp_contact varchar(10),
   emp_add varchar(255) DEFAULT false
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

## Change the connection url in the code with the mysql servers url (check conn.js)
