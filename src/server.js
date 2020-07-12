/** Este archivo tendra el codigo del servidor */
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');


//Inicializaciones
const app = express();

//Configuraciones
//Configuro una conexion para un puerto
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));

app.set('view engine', '.hbs');

//Middlewares
//Con esto le indico al servidor, que cuando lleguen datos de un formulario, atra vez
//de cualquier tipo de metodo voy a tratar de convertir esos datos en un
//objeto JSON
app.use(express.urlencoded({extended:false}));

//Variables Globales

//Rutas
app.use(require('./routes/index.routes'));


//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

// app.listen(3000, ()=>{
//     console.log('El servidor está corriendo en el puerto 3000');
// });