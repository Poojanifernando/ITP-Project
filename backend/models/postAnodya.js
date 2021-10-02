const mongoose = require('mongoose');

const postAnodyaSchema = new mongoose.Schema({

    OwnerName:{
        type:String,
        required:true
    },

    Age:{
    type:String,
    required:true
    },

    NationalID:{
    type:String,
    required:true
    },

    Address:{
    type:String,
    required:true
    },

    city:{
    type:String,
    required:true
    },

    Province:{
    type:String,
    required:true
    },

    ContactNumber:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('PostAnodya',postAnodyaSchema);