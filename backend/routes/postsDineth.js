const express = require('express');
const Crds = require('../models/postsDineth');

const router = express.Router();


//save posts
router.post('/postDineth/save',(req,res)=>{

    let newCrds = new Crds(req.body);

    newCrds.save((err)=>{
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
router.get('/postsDineth',(req,res)=>{
    Crds.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingCards:posts
        });
    });
});

//get a specific post

router.get("/postDineth/:id",(req,res)=>{
    let cardId = req.params.id;
    Crds.findById(cardId,(err,post)=>{
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
router.put('/post/updateDineth/:id',(req,res)=>{
    Crds.findByIdAndUpdate(
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

router.delete('/post/deleteDineth/:id',(req,res)=>{
    Crds.findByIdAndRemove(req.params.id).exec((err,deletedCard) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedCard
        });
    });
});


module.exports = router;
