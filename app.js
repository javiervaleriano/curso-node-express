require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

// const renderArgs = {
//   nombre: 'Javier Valeriano',
//   titulo: 'Curso de Node'
// };

// app.get('/', (req, res) => {
//   res.render('home', renderArgs);
// });

// app.get('/generic', (req, res) => {
//   // res.sendFile(__dirname + '/public/generic.html');

//   res.render('generic', renderArgs);
// });

// app.get('/elements', (req, res) => {
//   // res.sendFile(__dirname + '/public/elements.html');

//   res.render('elements', renderArgs);
// });

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})