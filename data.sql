-- Insert para Category
INSERT INTO category
VALUES(DEFAULT,"Calzado y moda");

INSERT INTO category
VALUES(DEFAULT,"Vehiculos");

INSERT INTO category
VALUES(DEFAULT,"Hogar");

INSERT INTO category
VALUES(DEFAULT,"Tecnologia");

INSERT INTO category
VALUES(DEFAULT,"Tendencia");

-- Insert para color
INSERT INTO color
VALUES(DEFAULT,"Blanco");

INSERT INTO color
VALUES(DEFAULT,"Negro");

INSERT INTO color
VALUES(DEFAULT,"Azul");

INSERT INTO color
VALUES(DEFAULT,"Rojo");

INSERT INTO color
VALUES(DEFAULT,"Verde");

INSERT INTO color
VALUES(DEFAULT,"Amarillo");

-- Insert para brand
INSERT INTO brand
VALUES(DEFAULT,"Nike");

INSERT INTO brand
VALUES(DEFAULT,"Lenovo");

INSERT INTO brand
VALUES(DEFAULT,"LG");

INSERT INTO brand
VALUES(DEFAULT,"Samsung");

INSERT INTO brand
VALUES(DEFAULT,"Yamaha");

INSERT INTO brand
VALUES(DEFAULT,"GW");

-- Inserts para usuario
INSERT INTO user
VALUES(DEFAULT,"Carlos","Camargo","carlos@email.com","cont12345","img1","admin");

INSERT INTO user
VALUES(DEFAULT,"Andrea","Aramburo","andrea@email.com","Cont123*","img2","admin");

INSERT INTO user
VALUES(DEFAULT,"Geovani","Rivera","geovani@email.com","cont12345**","img3","admin");

INSERT INTO user
VALUES(DEFAULT,"Julian","Perez","julian@email.com","cont1234*!","img4","admin");

-- Inserts para productos
INSERT INTO products
VALUES(DEFAULT,"Zapatillas Nike","Zapatillas nuevas, originales, color blanco","productImg1",1,450000,5,1,1,1);

INSERT INTO products
VALUES(DEFAULT,"Portatil Lenovo","ThinkPad X1 Carbon 9na Gen (14, Intel)","productImg2",5,2000000,2,1,2,2)