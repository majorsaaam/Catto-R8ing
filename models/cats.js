const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for cat
const CatSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The cat text field is required']
  }
})

//create model for cat
const Cat = mongoose.model('cat', CatSchema);

module.exports = Cat;