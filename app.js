const express = require('express')
const app = express()

app.get('/',  (req, res) => {
    res.send('Home page');
})

app.get('/hola-mundo',  (req, res) => {
    res.send('Hola Mundo desde su respectiva pagina');
})

app.get('*',  (req, res) => {
    res.send('404 | Page not Found');
 })

 
app.listen(8080);