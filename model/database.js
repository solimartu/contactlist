// require("dotenv").config();
// const mysql = require("mysql");
// const fs = require("fs");

// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;
// const DB_NAME = process.env.DB_NAME;

// const con = mysql.createConnection({
//   host: DB_HOST || "127.0.0.1",
//   user: DB_USER || "root",
//   password: DB_PASS,
//   database: DB_NAME || "allergens",
//   multipleStatements: true,
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");

//   let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(
//       "Table creation `users, foodtypes, allergytypes, deliveryservices, restaurants, rest-foodtypes, rest-allergytypes and rest-delivservices` was successful!"
//     );

//     console.log("Closing...");
//   });

//   con.end();
// });
/* DROP TABLE if exists users; CREATE TABLE users (userId INT NOT NULL AUTO_INCREMENT, username varchar(15) NOT NULL, email varchar(255) NOT NULL, password varchar(255) NOT NULL, PRIMARY KEY (userId)); DROP TABLE if exists foodtypes; CREATE TABLE foodtypes (id INT NOT NULL AUTO_INCREMENT, typeOfFood varchar(255) NOT NULL, icon varchar(255) NOT NULL, PRIMARY KEY (id)); DROP TABLE if exists allergytypes; CREATE TABLE allergytypes (id INT NOT NULL AUTO_INCREMENT, typeOfAllergy varchar(255) NOT NULL, icon varchar(255) NOT NULL, description varchar(255) NOT NULL, PRIMARY KEY (id)); DROP TABLE if exists deliveryservices; CREATE TABLE deliveryservices (id INT NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, icon varchar(255) NOT NULL, PRIMARY KEY (id)); DROP TABLE if exists restaurants; CREATE TABLE restaurants (id INT NOT NULL AUTO_INCREMENT, restaurant varchar(255) NOT NULL, allergymenu varchar(255) NOT NULL, glovolink varchar(255) NOT NULL, glovorating DECIMAL(65) NOT NULL, ubereatslink varchar(255) NOT NULL, ubereatsrating DECIMAL(65) NOT NULL, imglink varchar(255) NOT NULL, address varchar(255) NOT NULL, PRIMARY KEY (id)); DROP TABLE if rest-foodtypes; CREATE TABLE rest-foodtypes (id INT NOT NULL AUTO_INCREMENT, rest_id INT NOT NULL, foodtype_id INT NOT NULL, PRIMARY KEY (id)); DROP TABLE if rest-allergytypes; CREATE TABLE rest-allergytypes (id INT NOT NULL AUTO_INCREMENT, rest_id INT NOT NULL, allergytype_id INT NOT NULL, PRIMARY KEY (id)); DROP TABLE if rest-delivservices; CREATE TABLE rest-delivservices (id INT NOT NULL AUTO_INCREMENT, rest_id INT NOT NULL, deliveryservice_id INT NOT NULL, PRIMARY KEY (id)); ALTER TABLE rest-foodtypes ADD CONSTRAINT rest-foodtypes_fk0 FOREIGN KEY (rest_id) REFERENCES restaurants(id); ALTER TABLE rest-foodtypes ADD CONSTRAINT rest-foodtypes_fk1 FOREIGN KEY (foodtype_id) REFERENCES foodtypes(id); ALTER TABLE rest-allergytypes ADD CONSTRAINT rest-allergytypes_fk0 FOREIGN KEY (rest_id) REFERENCES restaurants(id); ALTER TABLE rest-allergytypes ADD CONSTRAINT rest-allergytypes_fk1 FOREIGN KEY (allergytype_id) REFERENCES allergytypes(id); ALTER TABLE rest-delivservices ADD CONSTRAINT rest-delivservices_fk0 FOREIGN KEY (rest_id) REFERENCES restaurants(id); ALTER TABLE rest-delivservices ADD CONSTRAINT rest-delivservices_fk1 FOREIGN KEY (deliveryservice_id) REFERENCES deliveryservices(id);*/
