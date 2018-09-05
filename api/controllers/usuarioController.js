'use strict';

var mongoose = require('mongoose');
  
var Usuario = mongoose.model('Usuario');

//listar todas las ciudades
exports.listAll = function(req, res) {
  console.log('Usuarios list all');
  Usuario.find({}, function(err, usuario) {
    if (err)
      res.send(err);
    res.json(usuario);
  });
};


// crear una ciudad
exports.create = function(req, res) {
  console.log('Usuarios create');
  var new_usuario = new Usuario(req.body);
  new_usuario._id = mongoose.Types.ObjectId();
  new_usuario.roles = ['user'];
  new_usuario.save(function(err, usuario) {
    if (err)
      res.send(err);
    res.json(usuario);
  });
};


//buscar una ciudad por nombre
exports.findOne = function(req, res) {
  console.log('Usuarios find');
  Usuario.findOne({username: req.params.username}, function(err, usuario) {
    if (err)
      res.send(err);
    res.json(usuario);
  });
};


//buscar y actualizar una ciudad
exports.update = function(req, res) {
  console.log('Usuarios update');
  var new_data = req.body;
  delete new_data.roles;
  Usuario.findOneAndUpdate({username: req.params.username}, new_data, {new: true}, function(err, usuario) {
    if (err)
      res.send(err);
    res.json(usuario);
  });
};


//eliminar una ciudad
exports.delete = function(req, res) {
  console.log('Usuarios delete');
  Usuario.remove({
    nombre: req.params.nombre
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Usuario successfully deleted' });
  });
};