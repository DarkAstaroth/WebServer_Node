const express = require('express')
const app = express();

// Servir Contenido estatico
app.use(express.static('public'));

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/Home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
 })

 
app.listen(8080);