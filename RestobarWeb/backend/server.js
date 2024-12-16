const express = require('express');
const cors = require('cors');

// Inicializar la aplicación
const app = express();

// Importar rutas
const productosRoutes = require('./routes/productos');
const categoriaRoutes = require('./routes/categoria');
const promocionesRoutes = require('./routes/promociones');

// Middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Permitir JSON en las solicitudes

// Rutas
app.use('/productos', productosRoutes); // Rutas para productos
app.use('/categoria', categoriaRoutes);
app.use('/promociones', promocionesRoutes); 

// Endpoint base de prueba
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de productos e imágenes');
});

const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
