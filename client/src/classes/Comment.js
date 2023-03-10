export const Comment = class {
    constructor(author, text, time) {
        this.author = author
        this.text = text
        this.time = time
    }

    get author () {
        return this.author;
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

    deleteComment(_ID) {
        return {}
    } 

    updateComment(text, time) {
        text = this.text;
        time = this.time;
        return Comment
    }
}