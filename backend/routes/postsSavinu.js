const express = require('express');
const postsSavinu = require('../models/postsSavinu');
const Employees = require('../models/postsSavinu');

const router = express.Router();

//save posts
        //end point "path"
router.post('/postSavinu/save',(req,res)=>{

    let newEmployees = new Employees(req.body);

    newEmployees.save((err) =>{
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

//get posts

router.get('/postsSavinu',(req,res) =>{
    Employees.find().exec((err,postsSavinu) =>{
        if(err){
            return res.status(400).json({
            error:err    
            });
        }
        return res.status(200).json({
            success:true,
            existingEmployees:postsSavinu
        });
    });
});


//get a specific post

router.get("/postSavinu/:id",(req,res) =>{

    let postId = req.params.id;

    Employees.findById(postId,(err,postSavinu) =>{
      if(err){
          return res.status(400).json({success:false, err});
        } 
        
        return res.status(200).json({
            success:true,
            postSavinu
         });
    });

    
});




//update posts

router.put('/postSavinu/update/:id',(req,res) =>{
    Employees.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,postSavinu) =>{
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

router.delete('/postSavinu/delete/:id',(req,res) =>{
    Employees.findByIdAndRemove(req.params.id).exec((err,deletedPostSavinu) => {

        if(err) return res.status(400).json({
            message:"Delete was unsuccesful",err
        });

        return res.json({
            message:"Delete was Succesfull",deletedPostSavinu
        });
    });
});

module.exports = router;