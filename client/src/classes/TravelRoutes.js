
export const TravelRoutes = class {
    constructor(title, country, start, end, price, travelType, duration, desc, author, comments, rating) {
        this.title = title;
        this.country = country;
        this.start = start;
        this.end = end;
        this.price = price;
        this.travelType = travelType;
        this.duration = duration;
        this.desc = desc;
        this.author = author;
        this.comments = comments;
        this.rating = rating;
    }

    get title() {
        return this.title & this.author;
    }

    get author() {
        return this.author;
    }
}