const mongoose = require('mongoose')
async function connect() {
    try {
        // accs: myblog
        //infors: shopping
        const con = await mongoose.connect('mongodb+srv://danggiapthan:danggiapthan@cluster0.gpavr.mongodb.net/infors?retryWrites=true', {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })
        //dotenv multer multer-gridfs-storage gridfs-stream
        console.log(con.connection.host)
    } catch (error) {
        console.log(error)
        console.log('Connection failed')
    }
}

module.exports = {connect}