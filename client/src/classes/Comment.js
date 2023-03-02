export const Comment = class {
    constructor(commentID, author, travelRoute, text, time) {
        this.author = author
        this.travelRoute = travelRoute
        this.text = text
        this.time = time
        this.commentID = commentID
    }

    get commentID (){
        return this.commentID;
    }

    get author () {
        return this.author;
    }
    get travelRoute () {
        return this.travelRoute;
    }
    get text () {
        return this.text;
    }

    get time () {
        return this.time;
    }

    get Comment () {
        return Comment;
    }

    deleteComment() {
        //BE code
        return {}
    } 

    updateComment(text, time) {
        let commentID = commentID();
        let author = author();
        let travelRoute = travelRoute();
        text = this.text;
        time = this.time;
     
        deleteComment(commentID);
        Comment(commentID, author, travelRoute, text, time)
        return Comment
    }
}