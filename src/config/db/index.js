const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog_myself_dev', {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })
        console.log('oke dc roi')
    } catch (error) {
        console.log('khong dc roi')
    }
}

module.exports = {connect}