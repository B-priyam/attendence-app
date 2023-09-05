const mongoose = require ("mongoose")

const TTSchema = mongoose.Schema({
    Class:{
        type:String,
    },
    year:{
        type:String,
    },
    day:String,
    Timetable:[{
        time:String,
        teacher:String,
        subject:String,
        room:String,
    }]
})

const TTmodal = mongoose.model("timetable",TTSchema);

module.exports = TTmodal