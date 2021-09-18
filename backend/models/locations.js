const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({

    BusNo:{
        type:String,
        required:true
    },
    StartingLocation:{
        type:String,
        required:true
    },
    FirstDestination:{
        type:String,
        required:true
    },
    SecondDestination:{
        type:String,
        required:true
    },
    ThirdDestination:{
        type:String,
        required:true
    },
   EndDestination:{
       type:String,
       required:true
   }
});

module.exports = mongoose.model('locations',locationSchema);