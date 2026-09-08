const express = require('express');

const {
    obtenerEquipos,
    obtenerEquipoPorId
} = require('../controllers/equiposController');

const router = express.Router();

router.get('/', obtenerEquipos);
router.get('/:id', obtenerEquipoPorId);

module.exports = router;