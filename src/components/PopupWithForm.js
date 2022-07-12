import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor( {popupSelector, handleFormSubmit} ) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = Array.from(this._form.querySelectorAll('.popup__item'));
        this._popupSubmitButton = this._popup.querySelector('.popup__button-save');
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => this._formValues[input.name] = input.value);

        return this._formValues;
    }
    setEventListeners () {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
    }
    close() {
        super.close();
        this._form.reset();
    }
    renderLoading (isLoading) {
        if(isLoading) {
            this._popupSubmitButton.textContent = 'Сохранение...'
        } else {
            this._popupSubmitButton.textContent = 'Сохранить'
        }
    }
}