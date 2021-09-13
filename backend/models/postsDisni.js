const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({

    Cus_name:{
        type:String,
        required:true
    },
    Cus_NIC:{
        type:String,
        required:true
    },
    ticket_no:{
        type:Intl,
        required:true
    },
    Ticket_date:{
        type:String,
        required:true
    },
    Ticket_time:{
        type:String,
        required:true
    },
    Ticket_price:{
        type:Intl,
        required:true
    },
    Ticket_rout:{
        type:String,
        required:true
    },
    Ticket_from:{
        type:String,
        required:true
    },
    Ticket_miles:{
        type:Intl,
        required:true
    },
    Ticket_destination:{
        type:String,
        required:true
    },
    Ticket_seat_no:{
        type:Intl,
        required:true
    }
});

module.exports = mongoose.model('Tickets',ticketSchema);