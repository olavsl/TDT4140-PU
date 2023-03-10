const express = require("express")
const {
    getComments,
    //getComment,
    //getCommentsByTravel,
    createComment,
    deleteComment,
    updateComment
} = require("../controllers/commentController")

const router = express.Router()

// GET all comment
router.get("/", getComments)

// GET single comment
//router.get("/:id", getComment)

// GET comments by travelID
//router.get("/:travelID", getCommentsByTravel)

// POST new comment
router.post("/", createComment)

// DELETE comment
router.delete("/:id", deleteComment)

// PATCH (update) comment
router.patch("/:id", updateComment)

module.exports = router