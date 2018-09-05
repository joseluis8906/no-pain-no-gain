'use strict';

var mongoose = require('mongoose');
  
var Ciudad = mongoose.model('Ciudad');

//listar todas las ciudades
exports.listAll = function(req, res) {
  console.log('Ciudades list all');
  Ciudad.find({}, function(err, ciudad) {
    if (err)
      res.send(err);
    res.json(ciudad);
  });
};


// crear una ciudad
exports.create = function(req, res) {
  console.log('Ciudades create');
  if(req.get('session') === undefined || req.get('session') === null){
    res.json(null);
    return;
  }
  var new_ciudad = new Ciudad(req.body);
  new_ciudad._id = mongoose.Types.ObjectId();
  new_ciudad.save(function(err, ciudad) {
    if (err)
      res.send(err);
    res.json(ciudad);
  });
};


//buscar una ciudad por nombre
exports.findOne = function(req, res) {
  console.log('Ciudades find');
  Ciudad.findOne({nombre: req.params.nombre}, function(err, ciudad) {
    if (err)
      res.send(err);
    res.json(ciudad);
  });
};


//buscar y actualizar una ciudad
exports.update = function(req, res) {
  console.log('Ciudades update');
  Ciudad.findOneAndUpdate({nombre: req.params.nombre}, req.body, {new: true}, function(err, ciudad) {
    if (err)
      res.send(err);
    res.json(ciudad);
  });
};


//eliminar una ciudad
exports.delete = function(req, res) {
  console.log('Ciudades delete');
  Ciudad.remove({
    nombre: req.params.nombre
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Ciudad successfully deleted' });
  });
};