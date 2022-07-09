export default class Card {
    constructor ({ data, handleCardClick }, templateElements) {
        this._name = data.name;
        this._link = data.link;
        this._templateElements = templateElements;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate () {
        const elementCard = document
            .querySelector(this._templateElements)
            .content
            .querySelector('.element')
            .cloneNode(true)
        return elementCard
    }

    _setEventListeners () {
        this._elementCard.querySelector('.element__image').addEventListener('click', () => this._handleCardClick(this._name, this._link));
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