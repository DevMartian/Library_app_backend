const express = require('express')
const app = express()
const mysql = require('mysql2')
var cors = require('cors');
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Expoliamus93!',
    database: 'library_db'
})

connection.connect()


const port = 5432 
app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/book', (request, response) => {
    connection.query('SELECT * FROM book', (error, results) => {
        if (error) {
            throw error
        }
        const res = {
            data: results
        }
        console.log(results)
        //response.status(200).json(res)
        response.send(res)
    });
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
