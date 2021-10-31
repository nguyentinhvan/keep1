const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Infor = new Schema({
    name: { type: String },
    description: { type: String },
    link: { type: String},
    img: { type: String},
    slug: { type: String},
  }, {timestamps: true});

module.exports = mongoose.model('Infor', Infor)
