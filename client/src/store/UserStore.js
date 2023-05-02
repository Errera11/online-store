import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this)
    }

    set isAuth(value) {
        this._isAuth = value;
    }
    get isAuth() {
        return this._isAuth;
    }

    set user(value) {
        this._user = value;
    }
    get user() {
        return this._user;
    }
}

