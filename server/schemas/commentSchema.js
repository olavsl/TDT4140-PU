const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

commentSchema.static.create = async function(author, text, time) {
    if (!author || !text || !time) {
        throw Error("All fields must be filled in!")
    }
    
    const Comment = await this.findOne(_id)
    
    return Comment;
}

module.exports = mongoose.model("Comment", commentSchema)