const express = require('express')
const app = express();

// cargar las variables de entorno
require('dotenv').config();
const port = process.env.PORT;

const hbs = require('hbs');

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir Contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Manuel',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Manuel',
        titulo: 'Curso de Node'
    });
});

app.get('/Home', (req, res) => {
    res.render('home', {
        nombre: 'Manuel',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Manuel',
        titulo: 'Curso de Node'
    });
});

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
 })

 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});