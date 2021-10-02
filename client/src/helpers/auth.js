class Auth {
    constructor() {
        this.authenticated = false;
        this.authStatus = "";
        this.signin();
        this.signup();
    }

    signup() {
        this.authenticated = localStorage.getItem("1-x-p") !== null;
        this.authStatus = "signedUp";
    }

    signin() {
        this.authenticated = localStorage.getItem("token") !== null;
        this.authStatus = "signedIn";
    }
    // logout() {
    //     this.authenticated = false;
    // }

    whatIsAuthStatus() {
        return this.authStatus;
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();
