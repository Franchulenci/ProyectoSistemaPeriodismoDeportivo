const { sql } = require('../config/database');

const obtenerEquipos = async (req, res) => {
    try {
        const resultado = await sql.query`
            SELECT 
                IdEquipo,
                Nombre,
                Escudo,
                País,
                Ciudad,
                Formacion
            FROM Equipos
        `;

        res.json(resultado.recordset);

    } catch (error) {
        console.error('Error al obtener equipos:', error);

        res.status(500).json({
            error: 'Error al obtener los equipos'
        });
    }
};

const obtenerEquipoPorId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const resultado = await sql.query`
            SELECT 
                IdEquipo,
                Nombre,
                Escudo,
                País,
                Ciudad,
                Formacion
            FROM Equipos
            WHERE IdEquipo = ${id}
        `;

        if (resultado.recordset.length === 0) {
            return res.status(404).json({
                error: 'Equipo no encontrado'
            });
        }

        res.json(resultado.recordset[0]);

    } catch (error) {
        console.error('Error al obtener el equipo:', error);

        res.status(500).json({
            error: 'Error al obtener el equipo'
        });
    }
};

module.exports = {
    obtenerEquipos,
    obtenerEquipoPorId
};