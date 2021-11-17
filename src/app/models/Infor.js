const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Infor = new Schema({
    name: { type: String },
    description: { type: String },
    link: { type: String},
    image: {type: String},  //data: Buffer, contentType
    nameimg: { type: String},
  }, {timestamps: true});

module.exports = new mongoose.model('Infor', Infor)
