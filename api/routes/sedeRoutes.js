'use strict';


module.exports = function(app) {
  var sedeController = require('../controllers/sedeController');

  // ciudad Routes
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
};