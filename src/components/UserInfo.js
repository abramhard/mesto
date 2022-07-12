export default class UserInfo {
    constructor({ info, name, avatar }) {
        this._info = document.querySelector(info);
        this._name = document.querySelector(name);
        this._avatar = document.querySelector(avatar);

    }
    getUserInfo () {
        this._profileValues = {};
        this._profileValues.info = this._info.textContent;
        this._profileValues.name =  this._name.textContent;
        this._profileValues.avatar = this._avatar.src;
        //this._profileValues._id = this.userId;
        return this._profileValues
    }
    setUserInfo (data) {
        this._info.textContent = data.info;
        this._name.textContent = data.name;
        //this.userId = data._id;
    }
    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }

}