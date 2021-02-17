const express = require('express')

const app = express();
const cors = require('cors')

app.set('view engine', 'ejs')

app.use(cors())

// ############################ USUÁRIOS ########################
app.get("/usuarios", (req, res, next)=>{
    const mysql =  require("mysql")
    const connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '',
        database:'recodeprojeto'
    })
        connection.query('SELECT * FROM usuarios', (error, result)=>{
            res.json({dados: result})
        })
});
app.post('/usuario/salvar',(req, res, next) =>{

    var cadastro = req.body;
    const mysql =  require("mysql")
    const connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '',
        database:'recodeprojeto'
    })
    
    connection.query('INSERT INTO mutiroes SET?', cadastro, (error, result)=>{
        console.log(error, result)
    });

})

// ############################ MUTIROES########################
app.get('/mutiroes', (req, res, next)=>{

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'',
        database:'recodeprojeto'
    })
    connection.query('SELECT * FROM mutiroes', (error, result)=>{
        res.json({dados:result})
    })
})
app.post('/mutirao/salvar',(req, res, next) =>{
    
    const mysql = require('mysql')
    var cadastro = req.body;
    const connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'',
        database:'recodeprojeto'
    })

    connection.query('INSERT INTO mutiroes SET?', cadastro, (error, result)=>{
        console.log(error, result)
    });

})



app.listen(1910, ()=>{
    console.log('O servidor subiu na porta 1910')
})
