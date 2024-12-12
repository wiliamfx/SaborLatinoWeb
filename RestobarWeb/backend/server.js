const express = require('express');
const cors = require('cors');

// Inicializar la aplicación
const app = express();

// Importar rutas
const productosRoutes = require('./routes/productos');
const imagenesRoutes = require('./routes/imagenes');

// Middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Permitir JSON en las solicitudes

// Rutas
app.use('/productos', productosRoutes); // Rutas para productos
app.use('/imagenes', imagenesRoutes);   // Rutas para imágenes

// Endpoint base de prueba
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de productos e imágenes');
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
