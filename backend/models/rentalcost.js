const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({

    Busid:{
        type:String,
        required:true
    },
    OwnerName:{
        type:String,
        required:true
    },

   
    NationalID:{
    type:String,
    required:true
    },

    Amountperkm:{
    type:String,
    required:true
    },

    Numberofkms:{
        type:String,
        required:true
    },

    Totalcost:{
        type:String,
        required:true
    },

  


});

module.exports = mongoose.model('Rentalcost',rentalSchema);