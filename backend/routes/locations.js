const express = require('express');
const locations = require('../models/locations');

const router = express.Router();

//save posts

router.post('/locations/save',(req,res)=>{

    let newLocation = new locations(req.body);

    newLocation.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Locations Added successfully"
        });
    });
});

//get a specific location

router.get("/locations/:id",(req,res) =>{
    let locationId = req.params.id;


    locations.findById(locationId,(err,location) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            location
        });
    });
});

//get Locations

router.get('/locations',(req,res)=>{
    locations.find().exec((err,locations)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existinglocations:locations
        });
    });

});

//update posts

router.put('/locations/update/:id',(req,res)=>{
    locations.findByIdAndUpdate(
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

//delete Locations

router.delete('/locations/delete/:id',(req,res)=>{
    locations.findByIdAndRemove(req.params.id).exec((err,deletedPost) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Location Deleted Succesfully",deletedPost
        });
    });
});

module.exports = router;