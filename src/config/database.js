const sql = require("mssql");
require("dotenv").config();

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function conectarDB() {
    try {
        await sql.connect(config);
        console.log("✅ Conectado a SQL Server");
    } catch (err) {
        console.error("❌ Error al conectar a la base de datos:");
        console.error(err);
    }
}

module.exports = {
    sql,
    conectarDB
};