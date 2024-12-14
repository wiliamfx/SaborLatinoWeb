const express = require('express');
const router = express.Router();
const db = require('../database');

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
    const query = 'SELECT idpromocion, descripcionpromocion, fechainicio, fechafin, precioreal, descuento  FROM promociones;';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});
// Ruta para obtener productos por categoría
router.get('/:id', (req, res) => {
    const id = req.params.id;

    const query = `SELECT idpromocion, descripcionpromocion, fechainicio, fechafin, precioreal, descuento  FROM promociones where idpromocion = ?;
    `;
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});

router.get('/imagen/:id', (req, res) => {
    const id = req.params.id;

    const query = 'select imagen from promociones where idpromocion = ?;';
    db.query(query, [id], (err, results) => {
        if (err || results.length === 0) return res.status(404).send('Imagen no encontrada');

        const imagenBlob = results[0].imagen;
        res.contentType('image/png'); // Cambia esto según el tipo de tu imagen
        res.send(imagenBlob);
    });
});


module.exports = router;
