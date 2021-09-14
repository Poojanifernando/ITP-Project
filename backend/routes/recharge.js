const express = require('express');
const Recharge = require('../models/recharge');

const router = express.Router();

//save posts
router.post('/post/charge',(req,res)=>{

    let newPost = new Recharge(req.body);

    newPost.save((err)=>{
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
router.get('/posts/charge',(req,res)=>{
    Recharge.find().exec((err,recharge)=>{
        if(err){
            return res.status(400).json({
                error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:recharge
        });
    });
});

//get a specific post
router.get("/post/charge/:id",(req,res)=>{
    let chargeId = req.params.id;
    Recharge.findById(chargeId,(err,post)=>{
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
router.put('/post/update/charge/:id',(req,res)=>{
    Recharge.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete posts

router.delete('/post/delete/charge/:id',(req,res)=>{
    Recharge.findByIdAndRemove(req.params.id).exec((err,deletedPost) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    });
});


module.exports = router;
