
const schedule = require('node-schedule');
const request = require('request')

const job = schedule.scheduleJob('*/20 * * * *', function(){
   request("https://serverchatandgame.herokuapp.com/api/keepserver",
    (err, res)=>{
        console.log(res.body)
    }
    )
})

module.exports = job