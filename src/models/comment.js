import mongoose from 'mongoose';
const commentSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
});
const Comment = mongoose.model("Comment", commentSchema);

export default Comment;