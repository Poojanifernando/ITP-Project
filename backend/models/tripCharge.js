const mongoose = require('mongoose');
const TripSchema = new mongoose.Schema({
    
    
    holdername:{
        type:String,
        required:true
    },
    creditcard:{
        type:Number,
        required:true
    },
    expire:{
        type:String,
        required:true
    },
    tripid:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
    
});

module.exports = mongoose.model('TripPayment', TripSchema);