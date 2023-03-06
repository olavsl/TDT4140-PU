const Comment = require("../schemas/commentSchema.js")
const mongoose = require("mongoose")

// GET all comments
const getComments = async (req, res) => {
    const comments = await Comment.find({}).sort({timestamps: -1})

    res.status(200).json(comments)
}

// GET a single comment
const getComment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Not a valid comment ID!"})
    }

    const comment = await Comment.findById(id)

    res.status(200).json(comment)
}

// GET comments for one travel route
const getCommentsByTravel = async (req, res) => {
    const { travelID } = req.params

    if (!mongoose.Types.ObjectId.isValid(travelID)) {
        return res.status(400).json({error: "Not a valid travel ID!"})
    }

    const comments = await Comment.findById(travelID)

    if (!comments) {
        return res.status(400).json({error: "No comment with that ID!"})
    }

    res.status(200).json(comments)
}

// POST (create) new comment
const createComment = async (req, res) => {
    const { commentID, author, travelID, text, time } = req.body

    // Add Comment document to database
    try {
        const comment = await Comment.create({commentID, author, travelID, text, time})
        res.status(200).json(comment)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE comment
const deleteComment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Not a valid comment ID!"})
    }

    const comment = await Comment.findOneAndDelete({_id: id})

    if (!comment) {
        return res.status(400).json({error: "No comment with that ID!"})
    }

    res.status(200).json(comment)
}

// PATCH (update) comment
const updateComment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Not a valid comment ID!"})
    }

    const comment = await Comment.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!comment) {
        return res.status(400).json({error: "No comment with that ID!"})
    }

    res.status(200).json(comment)
}

module.exports = {
    getComments,
    getComment,
    getCommentsByTravel,
    createComment,
    deleteComment,
    updateComment
}