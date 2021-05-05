const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const config = {
    host: 'desafio2-mysql',
    user: 'root',
    password: 'root',
    database: 'desafio2db'
}

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(nome) VALUES ('Felipe Alexandre')`
    connection.query(sql)

    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err


        let  nomes = '';

        result.forEach(element => {
            nomes += '<li>' + element.nome + '</br></li>'
        });

        res.send('<h1>Full Cycle Rocks!</h1></br><ul>' + nomes + '</ul>')
      });

      connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})


