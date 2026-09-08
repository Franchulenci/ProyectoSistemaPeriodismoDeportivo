const sql = require('mssql');

const config = {
    server: '172.16.198.18',
    port: 49774,
    user: 'sa',
    password: 'Francisco131',
    database: 'master',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function probar() {
    try {
        console.log('Intentando conectar...');

        await sql.connect(config);

        console.log('✅ CONECTÓ A SQL SERVER');

        const resultado = await sql.query`SELECT SUSER_SNAME() AS usuario`;

        console.log(resultado.recordset);

        await sql.close();
    } catch (error) {
        console.log('❌ FALLÓ');
        console.log(error);
    }
}

probar();