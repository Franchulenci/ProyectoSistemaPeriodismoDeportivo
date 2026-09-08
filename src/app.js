const express = require('express');
const { conectarDB } = require('./config/database');
const equiposRoutes = require('./routes/equiposRoutes');

const app = express();

app.use(express.json());

conectarDB();

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Cobertura Futbolistica funcionando'
    });
});

app.use('/api/equipos', equiposRoutes);

module.exports = app;