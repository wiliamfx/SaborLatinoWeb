const express = require('express');
const router = express.Router();
const db = require('../database');

const multer = require('multer');
const path = require('path');

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
    const query = 'SELECT idProducto AS id, nombreProducto AS nombre, precio FROM productos';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});

// Ruta para obtener productos por categoría
router.get('/:id', (req, res) => {
    const id = req.params.id;

    const query = `select idproducto, nombreproducto, precio from productos where idproducto = ?;
    `;
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});

router.get('/imagen/:id', (req, res) => {
    const id = req.params.id;

    const query = 'select imagen from productos where idproducto = ?;';
    db.query(query, [id], (err, results) => {
        if (err || results.length === 0) return res.status(404).send('Imagen no encontrada');

        const imagenBlob = results[0].imagen;
        res.contentType('image/png'); // Cambia esto según el tipo de tu imagen
        res.send(imagenBlob);
    });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');  // Crea una carpeta "uploads" dentro de tu proyecto
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
    }
});

// Validación de tipo de archivo y tamaño máximo
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        console.log('Archivo recibido:', file);  // Verifica que el archivo esté llegando al servidor
        const fileTypes = /jpeg|jpg|png/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if (extname && mimeType) {
            return cb(null, true);
        } else {
            cb(new Error('Solo se permiten imágenes JPG, JPEG o PNG'));
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 }  // Limitar a 5MB
});

// Endpoint para insertar productos
router.post('/insert', upload.single('imagen'), async (req, res) => {
    const { nombreProducto, precio, stock, idCategoria } = req.body;
    const imagenPath = req.file ? req.file.filename : null;

    if (!imagenPath) {
        return res.status(400).json({ error: 'No se cargó ninguna imagen' });
    }

    const sqlInsert = `
        INSERT INTO productos (nombreProducto, precio, stock, idCategoria, imagen)
        VALUES (?, ?, ?, ?, ?)
    `;
    const values = [nombreProducto, precio, stock, idCategoria, imagenPath];

    try {
        await db.query(sqlInsert, values);  // Inserta los datos en la base de datos
        res.status(200).json({ message: 'Producto insertado con éxito' });
    } catch (error) {
        console.error('Error al insertar producto:', error);
        res.status(500).json({ error: 'Error al insertar producto' });
    }
});

module.exports = router;
