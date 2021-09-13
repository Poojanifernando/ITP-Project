const express = require('express');

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
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
            error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post

router.get("/postDisni/:id",(req,res)=>{
    let ticketId = req.params.id;

    Tickets.findById(ticketId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//get specific ticket

router.get("/ticket/:id",(req,res)=>{
    let ticketId = req.params.id;

    Posts.findById(ticketId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
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
        (err,post)=>{
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

router.delete('/post/deleteDisni/:id',(req,res)=>{
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