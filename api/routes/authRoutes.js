'use strict';


module.exports = function(app) {
  var authController = require('../controllers/authController');

  // auth Routes
  app.route('/api/v1/public/auth')
    .post(authController.create)
    .delete(authController.delete);
};