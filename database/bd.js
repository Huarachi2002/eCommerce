const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgresql',
    host: 'localhost',
    database: 'eCommerce',
    password: 'hiachi20',
    port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})