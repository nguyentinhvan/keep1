const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongosh "mongodb+srv://cluster0.gpavr.mongodb.net/myFirstDatabase" --username danggiapthan', {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })
        console.log('oke dc roi')
    } catch (error) {
        console.log('khong dc roi')
    }
}

module.exports = {connect}