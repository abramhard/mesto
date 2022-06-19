import {openPopup, imageShowCard, nameShowCard, imageWindowCard} from './index.js'
export default class Card {
    constructor (name, link, templateElements) {
        this._name = name;
        this._link = link;
        this._templateElements = templateElements;
    }
    _getTemplate () {
        const elementCard = document
            .querySelector(this._templateElements)
            .content
            .querySelector('.element')
            .cloneNode(true)
        return elementCard
    }
    _handleOpenViewCard () {
        imageShowCard.src = this._link;
        imageShowCard.alt = this._name;
        nameShowCard.textContent = this._name;

        openPopup(imageWindowCard)
    }
    _setEventListeners () {
        this._elementCard.querySelector('.element__image').addEventListener('click', () => this._handleOpenViewCard());
        this._elementCard.querySelector('.element__like-button').addEventListener('click',  this._pressButtonLike);
        this._elementCard.querySelector('.element__delete-basket').addEventListener('click', () => this._deleteCardInPage())
    }

    _pressButtonLike (evt) {
        evt.target.classList.toggle('element__like-button_active');
    }
    _deleteCardInPage () {
        this._elementCard.remove();
        this._elementCard = null;
    }
    createNewCard () {
        this._elementCard = this._getTemplate();
        this._setEventListeners();

        this._image = this._elementCard.querySelector('.element__image');
        this._image.src = this._link;
        this._image.alt = this._name;

        this._titleCard = this._elementCard.querySelector('.element__title');
        this._titleCard.textContent = this._name;

        return this._elementCard;
    }
}