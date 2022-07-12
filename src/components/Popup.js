export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._closePopupMouseDown = this._closePopupMouseDown.bind(this);
        this._pressButtonEsc = this._pressButtonEsc.bind(this);
    }
    open () {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown',  this._pressButtonEsc);
    }
    close () {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._pressButtonEsc);
    }
    // нажатие на кнопку ESC
    _pressButtonEsc(evt) {
        if(evt.key === 'Escape') {
            this.close();
        }
    }
    _closePopupMouseDown (evt) {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            this.close()
        }
    }
    setEventListeners() {
        this._popup.addEventListener('click',  this._closePopupMouseDown);
    }
}
