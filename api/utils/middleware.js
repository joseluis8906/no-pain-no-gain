'use strict';

var jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = 'K3J9 8LMN 02F3 B3LW';
exports.JWT_SECRET_KEY = JWT_SECRET_KEY;

exports.verifyJWTToken = function (req, res, next) {
    let token = req.get('x-access-token');
    if(token === undefined){
        res.send('Session expired');
    }

    jwt.verify(token, JWT_SECRET_KEY, (err, decodedToken) => 
    {
      if (err || !decodedToken)
      {
        res.send('Access denied');
      }

      next();
    })
}