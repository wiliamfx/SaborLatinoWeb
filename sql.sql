use
create database db_saborlatino;

use db_saborlatino;

-- Tabla de Categorías de Productos
CREATE TABLE categoriasProductos (
    idCategoria INT AUTO_INCREMENT PRIMARY KEY,
    nombreCategoria VARCHAR(50) NOT NULL
);

-- Tabla de Productos
CREATE TABLE productos (
    idProducto INT AUTO_INCREMENT PRIMARY KEY,
    nombreProducto VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    imagen LONGBLOB,
    idCategoria INT,
    FOREIGN KEY (idCategoria) REFERENCES categoriasProductos(idCategoria)
    
);

-- Tabla de Promociones
CREATE TABLE promociones (
    idPromocion INT AUTO_INCREMENT PRIMARY KEY,
    descripcionPromocion TEXT NOT NULL,
    fechaInicio DATE NOT NULL,
    fechaFin DATE NOT NULL,
    precioReal Decimal(5,2) not null,
    descuento DECIMAL(5, 2) NOT NULL, -- Descuento en porcentaje (ejemplo: 10.00 = 10%)
    imagen longblob
    
);

-- Tabla de Reservas
CREATE TABLE reservas (
    idReserva INT AUTO_INCREMENT PRIMARY KEY,
    fechaReserva DATE NOT NULL,
    horaReserva TIME NOT NULL,
    nombreCliente VARCHAR(100) NOT NULL,
    telefonoCliente VARCHAR(20) NOT NULL,
    cantidadPersonas INT NOT NULL,
    mesaReservada VARCHAR(50) NOT NULL -- Ejemplo: "Mesa 1", "Mesa 2", etc.
);




INSERT INTO categoriasProductos (nombreCategoria) VALUES
('Cervezas'),
('Pack_Licores'),
('Comidas'),
('listo_tomar'),
('Aguas_gaseosas'),
('Cigarros_vapes'),
('Helados'),
('Piqueos_snacks'),
('Postre');

select * from productos;

INSERT INTO productos (nombreProducto, precio, stock, idCategoria, imagen) 
VALUES  ('Cerveza Artesanal', 12.50, 50, 1, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Cerveza_artesanal.webp')),
		('Cerveza Heineken', 8.00, 50, 1, 					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/heineken.jpg')),
        ('Cerveza Cusqueña trigo', 7.50, 50, 1, 			LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/cusquenatrigo.png')),
		('Cerveza Corona', 8.50, 100, 1, 					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Cerveza_corona.webp')),
		('Cerveza Cusqueña Negra', 9.00, 120, 1, 			LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Cerveza_cusquena.png')),
		('Pack Whisky Jack Daniels', 120.00, 20, 2, 		LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Whisky.webp')),
        ('Cerveza Pilsen', 7.50, 50, 1, 					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Pilsen.jpg')),
		('Combo Vodka Absolut + Red Bull', 150.00, 15, 2, 	LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Vodka.webp')),
		('Hamburguesa Clásica', 25.00, 50, 3, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/harmurguesa.jpg')),
		('Pizza Pepperoni Personal', 18.00, 30, 3, 			LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/pizza.avif')),
		('Lata de Coca-Cola', 4.50, 200, 4, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/coca.webp')),
		('Agua San Mateo', 3.00, 150, 5, 					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/agua.jpg')),
		('Vape sabor Mango', 35.00, 25, 6, 					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/vape.jpg')),
		('Helado de Chocolate', 7.50, 40, 7, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/helado.jpg')),
		('Nachos con Guacamole', 20.00, 25, 8, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/nachos.avif')),
		('Brownie de Chocolate', 12.00, 30, 9, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/brownie.jpg'));

INSERT INTO promociones (descripcionPromocion, fechaInicio, fechaFin, precioReal, descuento, imagen) VALUES
('1 Vodka Smirnoff Tamarindo 700 ml1 Jugo de naranja 1.5 Lt)', '2024-12-01', '2024-12-15',50.90 , 30.00 ,		LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/vodka.png')),
('6 Alitas + 500ml de maracuya', '2024-12-01', '2024-12-31',19.60, 30.00,										LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/alita.png')),
('Cerveza Tres Cruces Lager Six Pack Lata 310 ml', '2024-12-05', '2024-12-15', 23.90, 30.00,					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/3cruces.webp')),
('1 Coca Cola x 1 Lt + 2 Hamburguesas Parrilleras)', '2024-12-01', '2024-12-31',20.90, 30.00,					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/coca-hamburguesa.png')),
('6 Tequeños + 1 gaseosa 500ml)', '2024-12-01', '2024-12-31',14.30, 30.00,										LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/tequenos.png')),
('2 Four Loko Purple x 473 Ml', '2024-12-01', '2024-12-31',22.00, 30.00,										LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/for-loko.webp')),
('Piscano Sour Maracuyá 700 ml', '2024-12-01', '2024-12-31',22.90, 30.00,										LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/soer.webp')),
('1 Ron Cartavio 700ml + Cocacola 1L', '2024-12-01', '2024-12-31',42.90, 30.00,									LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/RonPack.jpg')),
('6 cervezas 7vidas 310ml', '2024-12-01', '2024-12-31',26.90, 30.00,											LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/7vidas.png'))
;
use db_saborlatino;
select * from promociones;
select imagen from promociones where idpromocion =  1;
SELECT idpromocion, descripcionpromocion, fechainicio, fechafin, precioreal, descuento  FROM promociones;
