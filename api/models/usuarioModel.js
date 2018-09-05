'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

var UsuarioSchema = Schema({
  _id: {type: Schema.Types.ObjectId},
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{type: String, required: true}]
});


UsuarioSchema.pre('save', function(next) {
  var usuario = this;

  // only hash the password if it has been modified (or is new)
  if (!usuario.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(usuario.password, salt, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          usuario.password = hash;
          next();
      });
  });
});



UsuarioSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

module.exports = mongoose.model('Usuario', UsuarioSchema);