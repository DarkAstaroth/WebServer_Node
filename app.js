const express = require('express')
const app = express();

// Servir Contenido estatico
app.use(express.static('public'));

app.get('/hola-mundo',  (req, res) => {
    res.send('Hola Mundo desde su respectiva pagina');
})

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
 })

 
app.listen(8080);