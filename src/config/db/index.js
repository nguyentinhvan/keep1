const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://danggiapthan:danggiapthan@cluster0.gpavr.mongodb.net/infors?retryWrites=true&w=majorit', {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })
        console.log('connect success')
    } catch (error) {
        console.log('Connection failed')
    }
}

module.exports = {connect}