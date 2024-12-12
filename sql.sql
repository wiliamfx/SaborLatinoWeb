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

INSERT INTO productos (nombreProducto, precio, stock, idCategoria, imagen) 
VALUES  ('Cerveza Artesanal', 12.50, 50, 1, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Cerveza_artesanal.webp')),
		('Cerveza Corona', 8.50, 100, 1, 					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Cerveza_corona.webp')),
		('Cerveza Cusqueña Negra', 9.00, 120, 1, 			LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Cerveza_cusquena.png')),
		('Pack Whisky Jack Daniels', 120.00, 20, 2, 		LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Whisky.webp')),
		('Combo Vodka Absolut + Red Bull', 150.00, 15, 2, 	LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/Vodka.webp')),
		('Hamburguesa Clásica', 25.00, 50, 3, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/harmurguesa.jpg')),
		('Pizza Pepperoni Personal', 18.00, 30, 3, 			LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/pizza.avif')),
		('Lata de Coca-Cola', 4.50, 200, 4, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/coca.webp')),
		('Agua San Mateo', 3.00, 150, 5, 					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/agua.jpg')),
		('Vape sabor Mango', 35.00, 25, 6, 					LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/vape.jpg')),
		('Helado de Chocolate', 7.50, 40, 7, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/helado.jpg')),
		('Nachos con Guacamole', 20.00, 25, 8, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/nachos.avif')),
		('Brownie de Chocolate', 12.00, 30, 9, 				LOAD_FILE('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/brownie.jpg'));


INSERT INTO promociones (descripcionPromocion, fechaInicio, fechaFin, descuento) VALUES
('2x1 en cervezas nacionales', '2024-12-01', '2024-12-15', 50.00),
('10% de descuento en packs de licores', '2024-12-01', '2024-12-31', 10.00),
('Combo Hamburguesa + Gaseosa a S/ 28', '2024-12-05', '2024-12-10', 20.00);

