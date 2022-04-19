const mysql2 = require('mysql2')
const dotenv = require("dotenv")
dotenv.config()

const con = mysql2.createConnection({
    host:process.env.DB_HOSTNAME,
    user: "root",
    password:process.env.DB_PASSWORD,
    database: "space_booking",
})

module.exports = con