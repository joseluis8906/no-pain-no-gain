'use strict';

var verifyJWTToken = require('../utils/middleware').verifyJWTToken;

module.exports = function(app) {
  var ciudadController = require('../controllers/ciudadController');

  // routes session required
  app.route('/api/v1/private/ciudades').post(verifyJWTToken);
  app.route('/api/v1/private/ciudades/:nombre').put(verifyJWTToken);
  app.route('/api/v1/private/ciudades/:nombre').delete(verifyJWTToken);

  // ciudad Routes
  app.route('/api/v1/private/ciudades')
    .get(ciudadController.listAll)
    .post(ciudadController.create);

  app.route('/api/v1/private/ciudades/:nombre')
    .get(ciudadController.findOne)
    .put(ciudadController.update)
    .delete(ciudadController.delete);
};