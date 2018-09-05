'use strict';

var verifyJWTToken = require('../utils/middleware').verifyJWTToken;

module.exports = function(app) {
  var sedeController = require('../controllers/sedeController');

  // routes session required
  app.route('/api/v1/private/sedes').post(verifyJWTToken);
  app.route('/api/v1/private/sedes/:nombre').put(verifyJWTToken);
  app.route('/api/v1/private/sedes/:nombre').delete(verifyJWTToken);

  app.route('/api/v1/private/sedes/:nombre').put(verifyJWTToken);
  app.route('/api/v1/private/sedes/:nombre/usuarios').get(verifyJWTToken);

  // Sede Routes
  app.route('/api/v1/private/sedes')
    .get(sedeController.listAll);
    
  app.route('/api/v1/private/ciudades/:nombre/sedes')
    .post(sedeController.create);

  app.route('/api/v1/private/sedes/:nombre')
    .get(sedeController.findOne)
    .put(sedeController.update)
    .delete(sedeController.delete);

  app.route('/api/v1/private/sedes/:nombre/usuarios/:username')
    .put(sedeController.addUsuario);
  app.route('/api/v1/private/sedes/:nombre/usuarios')
    .get(sedeController.getUsuarios);
};