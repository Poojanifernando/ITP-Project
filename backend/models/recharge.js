const mongoose = require('mongoose');
const chargeSchema = new mongoose.Schema({
    
    cardno:{
        type:String,
        required:true
    },
    holdername:{
        type:String,
        required:true
    },
    creditcard:{
        type:String,
        required:true
    },
    expire:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('Recharge', chargeSchema);