const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({

    driverName:{
        type:String,
        required:true
    },
    driverNIC:{
        type:String,
        required:true
    },
    driverPhone:{
        type:String,
        required:true
    },
    licenseNo:{
        type:String,
        required:true
    },
    driverAddress:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    workingHours:{
        type:String,
        required:true
    },
    tripID:{
        type:String,
        required:true
    },
    availability:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Drivers',driverSchema);
//Posts->Drivers
//postSchema->driverSchema