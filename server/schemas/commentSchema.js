const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema({
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
    }
}, { timestamps: true })

commentSchema.static.create = async function(author, travelID, text, time) {
    if (!author || !travelID || !text || !time) {
        throw Error("All fields must be filled in!")
    }
    
    const Comment = await this.findOne({commentID})
    
    return Comment;
}

module.exports = mongoose.model("Comment", commentSchema)  