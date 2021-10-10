import mongoose from "mongoose";

const detailsSchema = mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required: true
        },
        alottedTime:{
            type: String,
            required: true
        },
        key:{
            type: Number,
            required: true
        }
    }
)

const Details = mongoose.model("Details", detailsSchema);

export default Details;