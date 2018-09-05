'use strict';


module.exports = function(app) {
  var ciudadController = require('../controllers/ciudadController');

  // ciudad Routes
  app.route('/api/v1/private/ciudades')
    .get(ciudadController.listAll)
    .post(ciudadController.create);

  app.route('/api/v1/private/ciudades/:nombre')
    .get(ciudadController.findOne)
    .put(ciudadController.update)
    .delete(ciudadController.delete);
};