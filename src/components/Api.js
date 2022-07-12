export default class Api {
    constructor(options) {

        this._headers = options.headers;
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        };
    }

    getProfileInfo() {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-44/users/me`, {
            method: "GET",
            headers: this._headers,
        }).then(this._getResponseData);
    }

    getInitialCards() {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-44/cards`, {
            method: "GET",
            headers: this._headers,
        }).then(this._getResponseData);
    }

    changeProfileInfo(data) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-44/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data["name"],
                about: data["info"],
            }),
        }).then(this._getResponseData);
    }

    changeProfileImg(data) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-44/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data["avatar"],
            }),
        }).then(this._getResponseData);
    }

    addNewCard(data) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-44/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data["cardName"],
                link: data["link"],
            }),
        }).then(this._getResponseData);
    }

    deleteCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-44/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._getResponseData);
    }

    likeCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-44/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
        }).then(this._getResponseData);
    }

    deleteLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-44/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._getResponseData);
    }
}