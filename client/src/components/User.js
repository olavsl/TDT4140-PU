import TravelRoutes from "./TravelRoutes";

export const User = class {
    constructor(username, password, logedIn, likedTravels, myTravels) {
        this.username = username;
        this.password = password;
        this.logedIn = logedIn;
        this.likedTravels = likedTravels;
        this.myTravels = myTravels;
    }

    get User() {
        return User;
    }

    get likedTravels() {
        if (this.username === "") {
            throw new Error('You are not logged in')
        }
        else {
            return this.likedTravels;
        }
    }

    get myTravels() {
        if (this.username === "") {
            throw new Error('You are not logged in')
        }
        else {
            return this.myTravels;
        }
    }
}