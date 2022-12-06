
const schedule = require('node-schedule');
const request = require('request')

const job = schedule.scheduleJob('*/20 * * * *', function(){
    console.log('........gửi request.......')
   request(process.env.CLIENT_1,
    (err, res)=>{
        console.log(res.body)
    }
    )
})

module.exports = job