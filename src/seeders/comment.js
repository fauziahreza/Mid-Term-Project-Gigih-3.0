// require the necessary libraries
import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    videoId : {
        type:String,
        required:true
    },
    username : {
        type:String,
        required:true
    },
    comment : {
        type:String,
        required:true
    },
})
const Comment = mongoose.model("comment",productSchema)

export default Comment;
