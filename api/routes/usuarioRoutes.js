'use strict';


module.exports = function(app) {
  var usuarioController = require('../controllers/usuarioController');

  // ciudad Routes
  app.route('/api/v1/private/usuarios')
    .get(usuarioController.listAll)
    .post(usuarioController.create);

  app.route('/api/v1/private/usuarios/:username')
    .get(usuarioController.findOne)
    .put(usuarioController.update)
    .delete(usuarioController.delete);
};