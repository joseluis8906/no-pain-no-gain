'use strict';

var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var SECRET_KEY = require('../utils/middleware').JWT_SECRET_KEY;
  
var Usuario = mongoose.model('Usuario');

// crear una session
exports.create = function(req, res) {
  console.log('Session create');
  Usuario.findOne({username: req.body.username}, function(err, usuario){
    if(err) res.send(err);

    if(usuario){
      usuario.comparePassword(req.body.password, function(err, isMatch){
        if (err) res.send(err);
        console.log(isMatch);
        if(isMatch){
          let token = jwt.sign({ data: usuario }, SECRET_KEY, { expiresIn: '30 days', algorithm: 'HS256' });
          res.set('x-access-token', token);
          res.send('session created');
        } else {
          res.send('usuario o password incorrecto');
        }
      });
    } else {
      res.send('usuario o password incorrecto');
    }
  });
};


//eliminar una session
exports.delete = function(req, res) {
  console.log('Session delete');
  res.removeHeader('x-access-token');
  res.end('Session expired');
};