const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    nic:{
        type:Number,
        required:true

    },
    address:{
        type:String,
        required:true
    },
   
    contactNo:{
        type:Number,
        required:true
    },
    startingPoint:{
        type:String,
        required:true
    },
    endingPoint:{
        type:String,
        required:true
    },
    noOfPassengers:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
   
    distance:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true
    }
   
   
});

module.exports = mongoose.model('Posts',postSchema)