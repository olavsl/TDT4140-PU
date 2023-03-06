export const Comment = class {
    constructor(author, travelRoute, text, time) {
        this.author = author
        this.travelRoute = travelRoute
        this.text = text
        this.time = time
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

    deleteComment(commentID) {
        commentID = this.commentID;
        //BE code
        return {}
    } 

    updateComment(text, time) {
        let author = author();
        let travelRoute = travelRoute();
        text = this.text;
        time = this.time;
        return Comment
    }
}