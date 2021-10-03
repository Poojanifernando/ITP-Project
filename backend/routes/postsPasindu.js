const express = require('express');
const PostsPasindu = require('../models/postsPasindu');

const router = express.Router();

//save posts

router.post('/postPasindu/save',(req,res)=>{

    let newPostsPasindu = new PostsPasindu(req.body);

    newPostsPasindu.save((err)=>{
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
router.get('/postsPasindu',(req,res)=>{
    PostsPasindu.find().exec((err,post)=>{
        if(err){
            return res.status(400).json({
            error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:post
        });
    });
});

//get a specific post

router.get("/postPasindu/:id",(req,res) =>{
    let postId = req.params.id;

    PostsPasindu.findById(postId,(err,post) =>{
      if(err){
          return res.status(400).jason({success:false,err});
        
      } 
         return res.status(200).json({
             success:true,
             post
         });
    });
});




//update posts

router.put('/post/updatePasindu/:id',(req,res)=>{
    PostsPasindu.findByIdAndUpdate(
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

router.delete('/post/deletePasindu/:id',(req,res)=>{
    PostsPasindu.findByIdAndRemove(req.params.id).exec((err,deletedPost) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    });
});

module.exports = router;



