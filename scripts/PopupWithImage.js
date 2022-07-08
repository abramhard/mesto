import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageShowCard = this._popup.querySelector('.popup__image');
        this._nameShowCard = this._popup.querySelector('.popup__subtitle');

    }
    open(name, link) {
        this._imageShowCard.src = link;
        this._imageShowCard.alt = name;
        this._nameShowCard.textContent = name;

        super.open()
    }
}