const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema({
    commentID: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    travelID: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    time: {
        type: timestamps,
        required: true
    }
}, { timestamps: true })

commentSchema.static.create = async function(commentID, author, travelID, text, time) {
    if (!author || !travelID || !text || !time) {
        throw Error("All fields must be filled in!")
    }
    
    const Comment = await this.findOne({commentID})
    
    return Comment;
}

module.exports = mongoose.model("Comment", comment)  