var express = require('express');
var app = express();
var port = 3000;
var mongoose = require('mongoose');
var Ciudad = require('./api/models/ciudadModel');
var Sede = require('./api/models/sedeModel');
var Usuario = require('./api/models/usuarioModel');
var bodyParser = require('body-parser');
const acl = require('express-acl');

let configObject = {
    filename: 'nacl.json',
    path: '.',
    decodedObjectName: 'decoded',
    roleSearchPath: 'decoded.role'
};
   
let responseObject = {
    status: 'Access Denied',
    message: 'You are not authorized to access this resource'
};
   
acl.config(configObject, responseObject);

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/NO_PAIN_NO_GAIN', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//rutas ciudad
var ciudadRoutes = require('./api/routes/ciudadRoutes');
ciudadRoutes(app);
//rutas sede
var sedeRoutes = require('./api/routes/sedeRoutes');
sedeRoutes(app);
//rutas usuario
var usuarioRoutes = require('./api/routes/usuarioRoutes');
usuarioRoutes(app);
//rutas auth
var authRoutes = require('./api/routes/authRoutes');
authRoutes(app);

app.listen(port);
console.log('Rest Api Server listen on port: ' + port);