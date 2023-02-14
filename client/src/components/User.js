
export const User = class {
    constructor(username, password, logedIn, likedTravels, myTravels) {
        this.username = username;
        this.password = password;
        this.logedIn = logedIn;
        this.likedTravels = likedTravels;
        this.myTravels = myTravels;
    }
}