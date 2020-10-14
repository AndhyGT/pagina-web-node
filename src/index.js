const express = require('express');
const app = express();
const path = require('path');

// configuraciones -- settings
app.set('port', 3000); // nuevo de puerto donde escuchara nuestro servidor
app.set("views", path.join(__dirname, "views"));
app.engine('html', require('ejs').renderFile); // poder usar la extension .html en los archivos de views sustituyendo (.ejs).
app.set('view engine', 'ejs'); // requiriendo el motor de plantilla que este caso es (ejs).


// rutas - routes
app.use(require('./routes/index')); // requiriendo nuestro archivo rutas que creamos en otra carpeta.


// archivos estaticos -- static files
app.use(express.static(path.join(__dirname, 'public')));

// escuchando en el servidor -- listening the server
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});