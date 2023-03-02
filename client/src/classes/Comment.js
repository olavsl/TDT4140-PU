export const Comment = class {
    constructor(ID, author, travelRoute, text, time) {
        this.author = author
        this.travelRoute = travelRoute
        this.text = text
        this.time = time
        this.ID = ID
    }

    get ID (){
        return this.ID;
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

    deleteComment(ID) {
        ID = this.ID;
        //BE code
        return {}
    } 
    
    updateComment(text, time) {
        let ID = ID();
        let author = author();
        let travelRoute = travelRoute();
        text = this.text;
        time = this.time;
     
        deleteComment(ID);
        Comment(ID, author, travelRoute, text, time)
        return Comment
    }
}



/*if (this.user === this.author) {
        updateComment()
    }
    else {
        throw new illegalArgument("Can not change other peoples comments")
    }*/