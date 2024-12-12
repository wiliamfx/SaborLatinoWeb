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
router.get('/:id', (req, res) => {
    const id = req.params.id;

    const query = `select idproducto, nombreproducto, precio from productos where idproducto = ?;
    `;
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});

module.exports = router;
