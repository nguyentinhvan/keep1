const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://danggiapthan:danggiapthan@cluster0.gpavr.mongodb.net/infors?retryWrites=true&w=majorit', {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })
        console.log('oke dc roi')
    } catch (error) {
        console.log('khong dc roi')
    }
}

module.exports = {connect}