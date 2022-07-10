import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor( {popupSelector, handleFormSubmit} ) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__item'));
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => this._formValues[input.name] = input.value);

        return this._formValues;
    }
    setEventListeners () {
        super.setEventListeners()
        this._form.addEventListener('submit', () => {
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
    }
    close() {
        super.close();
        this._form.reset();
    }

}