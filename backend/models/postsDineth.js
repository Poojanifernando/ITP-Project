const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
    
    fname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    contactN:{
        type:Number,
        required:true
    },
    startPoint:{
        type:String,
        required:true
    },
    endPoint:{
        type:String,
        required:true
    },
    busType:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('Crds', cardSchema);