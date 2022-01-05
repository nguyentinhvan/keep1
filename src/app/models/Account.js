const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema

const Account = new Schema({
    username: { type: String },
    password: { type: String },
  }, {timestamps: true});

Account.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: 'all',
})
module.exports = mongoose.model('Account', Account)

