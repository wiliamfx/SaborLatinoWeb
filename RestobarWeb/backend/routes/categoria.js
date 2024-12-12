const express = require('express');
const router = express.Router();
const db = require('../database');

// Ruta para obtener todos los productos

router.get('/', (req, res) => {
    const query = 'select * from categoriasproductos;';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});


router.get('/:categoria', (req, res) => {
    const categoria = req.params.categoria;

    const query = `select idproducto, nombreproducto, precio from productos where idcategoria = ?;
    `;
    db.query(query, [categoria], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});
module.exports = router;