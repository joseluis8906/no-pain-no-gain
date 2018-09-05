'use strict';

var mongoose = require('mongoose');
  
var Ciudad = mongoose.model('Ciudad');
var Sede = mongoose.model('Sede');
var Usuario = mongoose.model('Usuario');

//listar todas las ciudades
exports.listAll = function(req, res) {
  console.log('Sedes list all');
  Sede.find({}, function(err, sede) {
    if (err)
      res.send(err);
    res.json(sede);
  });
};


// crear una ciudad
exports.create = function(req, res) {
  console.log('Sedes create');
  var new_sede = new Sede(req.body);
  new_sede._id = mongoose.Types.ObjectId();
  Ciudad.findOne({nombre: req.params.nombre}, function(err, ciudad) {
    if (err) {
      res.send(err);
    }

    if(ciudad){
      new_sede._id = mongoose.Types.ObjectId();
      new_sede.ciudad = ciudad._id;
      new_sede.save(function(err, sede) {
        if (err)
          res.send(err);
        res.json(sede);
      }); 
    } else {
      res.json(ciudad);
    }
  });
};


//buscar una ciudad por nombre
exports.findOne = function(req, res) {
  console.log('Sedes find');
  Sede.findOne({nombre: req.params.nombre}, function(err, sede) {
    if (err)
      res.send(err);
    res.json(sede);
  });
};


//buscar y actualizar una ciudad
exports.update = function(req, res) {
  console.log('Sedes update');
  Sede.findOneAndUpdate({nombre: req.params.nombre}, req.body, {new: true}, function(err, sede) {
    if (err)
      res.send(err);
    res.json(sede);
  });
};


//eliminar una ciudad
exports.delete = function(req, res) {
  console.log('Sedes delete');
  Sede.remove({
    nombre: req.params.nombre
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Sede successfully deleted' });
  });
};


// agregar un usuario
exports.addUsuario = function(req, res) {
  console.log('Sedes add usuario');
  Sede.findOne({nombre: req.params.nombre}, function(err, sede) {
    if (err) res.send(err);

    if(sede){
      Usuario.findOne({username: req.params.username}, function(err, usuario){
        if(err) res.send(err);
          if(usuario){
            if(sede.usuarios.length < 2){
              if(sede.usuarios.indexOf(usuario._id) === -1){
                sede.usuarios.push(usuario._id);
                Sede.replaceOne({}, sede, function(err, sede){
                  if(err) res.send(err);
                  res.json(sede);
                });
              } else {
                res.json(usuario);
              }
            }
          } else {
            res.json(usuario);      
          }

       });

    } else {
      res.json(sede);
    }
  });
};


// get usuario by sede
exports.getUsuarios = function(req, res) {
  console.log('Sedes get usuarios');
  Sede.findOne({nombre: req.params.nombre})
    .populate('usuarios')
    .exec(function(err, sede){
      if(err) res.send(err);
      
      if(sede){
        res.json(sede.usuarios);
      }
    });
}