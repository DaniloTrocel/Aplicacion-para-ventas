const Pool = require('pg').Pool 

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '4516161',
    database: 'ventas',
    port: 5432
})

module.exports = {pool}