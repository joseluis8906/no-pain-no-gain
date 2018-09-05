'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CiudadSchema = Schema({
  _id: {type: Schema.Types.ObjectId },
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  sedes: [{ type: Schema.Types.ObjectId, ref: 'Sede' }]
});

module.exports = mongoose.model('Ciudad', CiudadSchema);