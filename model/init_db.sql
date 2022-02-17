DROP TABLE if exists users;
CREATE TABLE users (userId INT NOT NULL AUTO_INCREMENT, username varchar(15) NOT NULL, email varchar(255) NOT NULL,password varchar(255) NOT NULL,PRIMARY KEY (userId)
);
DROP TABLE if exists foodtypes;
CREATE TABLE foodtypes (id INT NOT NULL AUTO_INCREMENT, typeOfFood varchar(255) NOT NULL, icon varchar(255) NOT NULL,PRIMARY KEY (id)
);
DROP TABLE if exists allergytypes;
CREATE TABLE allergytypes (id INT NOT NULL AUTO_INCREMENT, typeOfAllergy varchar(255) NOT NULL, icon varchar(255) NOT NULL,description varchar(255) NOT NULL,PRIMARY KEY (id)
);
DROP TABLE if exists deliveryservices;
CREATE TABLE deliveryservices (id INT NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL, icon varchar(255) NOT NULL,PRIMARY KEY (id)
);
DROP TABLE if exists restaurants;
CREATE TABLE restaurants (id INT NOT NULL AUTO_INCREMENT, restaurant varchar(255) NOT NULL, allergymenu varchar(255) NOT NULL, glovolink varchar(255) NOT NULL, glovorating DECIMAL(65) NOT NULL, ubereatslink varchar(255) NOT NULL, ubereatsrating DECIMAL(65) NOT NULL, imglink varchar(255) NOT NULL, address varchar(255) NOT NULL,PRIMARY KEY (id)
);
DROP TABLE if exists rest_foodtypes;
CREATE TABLE rest_foodtypes (id INT NOT NULL AUTO_INCREMENT, rest_id INT NOT NULL, foodtype_id INT NOT NULL, PRIMARY KEY (id)
);
DROP TABLE if exists rest_allergytypes;
CREATE TABLE rest_allergytypes (id INT NOT NULL AUTO_INCREMENT, rest_id INT NOT NULL, allergytype_id INT NOT NULL, PRIMARY KEY (id)
);
DROP TABLE if exists rest_delivservices;
CREATE TABLE rest_delivservices (id INT NOT NULL AUTO_INCREMENT, rest_id INT NOT NULL, deliveryservice_id INT NOT NULL,PRIMARY KEY (id)
); 
ALTER TABLE rest_foodtypes ADD CONSTRAINT rest_foodtypes_fk0 FOREIGN KEY (rest_id) REFERENCES restaurants(id); 
ALTER TABLE rest_foodtypes ADD CONSTRAINT rest_foodtypes_fk1 FOREIGN KEY (foodtype_id) REFERENCES foodtypes(id); 
ALTER TABLE rest_allergytypes ADD CONSTRAINT rest_allergytypes_fk0 FOREIGN KEY (rest_id) REFERENCES restaurants(id); 
ALTER TABLE rest_allergytypes ADD CONSTRAINT rest_allergytypes_fk1 FOREIGN KEY (allergytype_id) REFERENCES allergytypes(id); 
ALTER TABLE rest_delivservices ADD CONSTRAINT rest_delivservices_fk0 FOREIGN KEY (rest_id) REFERENCES restaurants(id); 
ALTER TABLE rest_delivservices ADD CONSTRAINT rest_delivservices_fk1 FOREIGN KEY (deliveryservice_id) REFERENCES deliveryservices(id);     