const express = require('express');
const app = express();
const path = require('path');

// configuraciones -- settings
app.set('port', 3000);






// escuchando en el servidor -- listening the server
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});