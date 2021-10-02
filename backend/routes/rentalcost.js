const express = require('express');
const rentalcost = require('../models/rentalcost');
const Rentalcost = require('../models/rentalcost');

const router = express.Router();

//save rentalcost

router.post('/rentalcost/save',(req,res)=>{

    let newRentalcost = new Rentalcost(req.body);

    newRentalcost.save((err)=>{
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

//get Rentalcost
router.get('/rentalcost',(req,res) =>{
    Rentalcost.find().exec((err,rentalcost) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingRentalcost:rentalcost
        });
    });
});

//update posts

router.put('/rentalcost/update/:id',(req,res)=>{
    Rentalcost.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,rentalcost)=>{
            if(err){
                return res.status(400).jason({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete post
router.delete('/rentalcost/delete/:id',(req,res)=>{
    Rentalcost.findByIdAndRemove(req.params.id).exec((err,deletedRentalcost) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedRentalcost
        });
    });
});


//get specific rental cost
router.get(`/rentalcost/:id`,(req,res) =>{
    let RentalcostId = req.params.id;
    Rentalcost.findById(RentalcostId,(err,rentalcost)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            rentalcost
        });
    });
});


module.exports = router;