export default class UserInfo {
    constructor({ info, name, avatar }) {
        this._info = document.querySelector(info);
        this._name = document.querySelector(name);
        this._avatar = document.querySelector(avatar);

    }
    getUserInfo () {
        this._profileValues = {
            info: this._info.textContent,
            name: this._name.textContent,
            avatar: this._avatar.src
        }
        return this._profileValues
    }
    setUserInfo (data) {
        this._name.textContent = data.name;
        this._info.textContent = data.about;
        this._avatar.src = data.avatar;
    }


}