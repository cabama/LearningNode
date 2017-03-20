// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  nombre: String,
  apellido: String,
});

// the schema is useless so far
// we need to create a model using it
var Persona = mongoose.model('Persona', userSchema);

// make this available to our users in our Node applications
module.exports = Persona;
