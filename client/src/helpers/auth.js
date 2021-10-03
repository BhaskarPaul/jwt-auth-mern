class Auth {
    constructor() {
        this.authenticated = false;
    }

    in(cb) {
        this.authenticated = true;
        cb();
    }

    out(cb) {
        this.authenticated = false;
        cb();
    }

    isAuth() {
        return this.authenticated;
    }
}

export default new Auth();
