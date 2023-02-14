
export const TravelRoutes = class {
    constructor(title, country, start, end, price, travelType, distance, desc, author) {
        this.title = title;
        this.country = country;
        this.start = start;
        this.end = end;
        this.price = price;
        this.travelType = travelType;
        this.distance = distance;
        this.desc = desc;
        this.author = author;
    }

    get title() {
        return this.title & this.author;
    }

    get author() {
        return this.author;
    }
 
}