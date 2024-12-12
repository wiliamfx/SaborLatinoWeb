const express = require('express');
const router = express.Router();
const db = require('../database');

// Ruta para obtener una imagen por ID
router.get('/:id', (req, res) => {
    const id = req.params.id;

    const query = 'SELECT imagen FROM productos WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err || results.length === 0) return res.status(404).send('Imagen no encontrada');

        const imagenBlob = results[0].imagen;
        res.contentType('image/png'); // Cambia esto según el tipo de tu imagen
        res.send(imagenBlob);
    });
});

module.exports = router;
