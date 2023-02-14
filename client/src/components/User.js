import TravelRoutes from "./TravelRoutes";

export const User = class {
    constructor(username, password, name, logedIn, likedTravels, myTravels) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.logedIn = logedIn;
        this.likedTravels = likedTravels;
        this.myTravels = myTravels;
    }

    get User() {
        return User;
    }

    get username() {
        return this.username;
    }
    get name() {
        return this.name;
    }

    get likedTravels() {
        return this.likedTravels;
    }

    get myTravels() {
        return this.myTravels;
    }
}