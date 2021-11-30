const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema

const Infor = new Schema({
    name: { type: String },
    description: { type: String },
    link: { type: String},
    nameimg: { type: String},
  }, {timestamps: true});

Infor.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: 'all',
})
  
module.exports = UploadModel = mongoose.model('Infor', Infor)

