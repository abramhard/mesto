export default class UserInfo {
    constructor({ info, name }) {
        this._info = document.querySelector(info);
        this._name = document.querySelector(name);
    }
    getUserInfo () {
        this._profileValues = {};
        this._profileValues.info = this._info.textContent;
        this._profileValues.name =  this._name.textContent;
        return this._profileValues
    }
    setUserInfo (data) {
        this._info.textContent = data['job'];
        this._name.textContent = data['name'];
    }
}