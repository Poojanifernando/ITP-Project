const mongoose = require('mongoose');

const postSchemaSavinu = mongoose.Schema({

    name :{
        type:String,
         required:true
     },

     employee :{
        type:String,
        required:true
    },

     address :{
         type:String,
         required:true
     },
 
     contact_number :{
         type:Number,
         required:true
     },

     nic :{
        type:String,
        required:true
     },

     salary :{
        type:Number,
        required:true
     },
     
     bank_number :{
        type:Number,
        required:true
     },

     user_name :{
        type:String,
        required:true
     }

    });

module.exports = mongoose.model('Employees', postSchemaSavinu);