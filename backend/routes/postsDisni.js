const express = require('express');
const { request } = require('express');
const Tickets = require('../models/postsDisni');

const router = express.Router();

//save posts

router.post('/postDisni/save',(req,res)=>{

    let newTickets = new Tickets(req.body);

    newTickets.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});

//getpost
router.get('/postsDisni',(req,res)=>{
    Tickets.find().exec((err,postsDisni)=>{
        if(err){
            return res.status(400).json({
            error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:postsDisni
        });
    });
});

//get a specific post

router.get("/postDisni/:id",(req,res)=>{
    let ticketId = req.params.id;

    Tickets.findById(ticketId,(err,postDisni)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            postDisni
        });
    });
});

//get specific ticket

router.get("/ticket/:id",(req,res)=>{
    let ticketId = req.params.id;

    Tickets.findById(ticketId,(err,postDisni)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            postDisni
        });
    });
});





//update posts

router.put('/post/updateDisni/:id',(req,res)=>{
    Tickets.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,postDisni)=>{
            if(err){
                return res.status(400).jason({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete posts

router.delete('/post/deleteDisni/:id',(req,res)=>{//posts
    Tickets.findByIdAndRemove(req.params.id).exec((err,deletedTicket) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedTicket
        });
    });
});

module.exports = router;