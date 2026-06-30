const express = require('express');
const { conectarDB } = require('./config/database');

const app = express();

app.use(express.json());

conectarDB();

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Cobertura Futbolistica funcionando'
    });
});

module.exports = app;