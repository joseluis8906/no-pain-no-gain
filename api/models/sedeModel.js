'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SedeSchema = Schema({
  _id: {type: Schema.Types.ObjectId},
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  ciudad: {
    type: Schema.Types.ObjectId, 
    ref: 'Ciudad',
    required: true
  }
});

module.exports = mongoose.model('Sede', SedeSchema);