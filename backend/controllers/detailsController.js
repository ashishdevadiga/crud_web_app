import asyncHandler from "express-async-handler";
import Details  from "../models/detailsModal.js";

const createUserDetails = asyncHandler(async(req, res)=>{
    const { firstName, lastName, phoneNumber, alottedTime, key } = req.body.payload;

    const checkTimeSlot = await Details.findOne({alottedTime: alottedTime});

    if(checkTimeSlot){
        checkTimeSlot.firstName = firstName || checkTimeSlot.firstName;
        checkTimeSlot.lastName = lastName || checkTimeSlot.lastName;
        checkTimeSlot.phoneNumber = phoneNumber || checkTimeSlot.phoneNumber;

        const updatedDetails = await checkTimeSlot.save();
        if(updatedDetails){ 
            res.status(201).json({
                _id: updatedDetails._id,
                firstName: updatedDetails.firstName,
                lastName: updatedDetails.lastName,
                phoneNumber: updatedDetails.phoneNumber,
            });
        } else {
          res.status(400);
          throw new Error("Invalid data");
        }
    }else{
        const details = await Details.create({
            firstName, 
            lastName, 
            phoneNumber, 
            alottedTime,
            key
        });
        
        if (details) {
            res.status(201).json({
              _id: details._id,
              firstName: details.firstName,
              lastName: details.lastName,
              phoneNumber: details.phoneNumber,
              alottedTime: details.alottedTime,
              key: details.key
            });
          } else {
            res.status(400);
            throw new Error("Invalid data");
          }
    }

});

const getUserDetails = asyncHandler(async(req, res) =>{
    const details = await Details.find();
    if(details){
        res.json(details);
    }else{
        throw new Error("No user found");
    }
})

const getUserDetailsByKey = asyncHandler(async(req, res) =>{
    const details = await Details.findOne({alottedTime: req.params.alottedTime});

    if(details){
        res.json(details)
    }else{
        throw new Error("No user found");
    }
})

export {
    createUserDetails,
    getUserDetails,
    getUserDetailsByKey
}
