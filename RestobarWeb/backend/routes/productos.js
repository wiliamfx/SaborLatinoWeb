const express = require('express');
const router = express.Router();
const db = require('../database');

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
    const query = 'SELECT idProducto AS id, nombreProducto AS nombre, precio FROM productos';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});

// Ruta para obtener productos por categoría
router.get('/:categoria', (req, res) => {
    const categoria = req.params.categoria;

    const query = `
            SELECT idProducto AS id, nombreProducto AS nombre, precio 
            FROM productos 
            WHERE idCategoria = ?
    `;
    db.query(query, [categoria], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});

module.exports = router;
