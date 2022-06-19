export default class FormValidator {
    constructor(enableValidation, formElement) {
        this._enableValidation = enableValidation;
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(this._enableValidation.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._enableValidation.submitButtonSelector);
    }
    enableValidation () {
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });

        this._setEventListeners()
};
    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };
    _showInputError (inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._enableValidation.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._enableValidation.errorClass);
    };
    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._enableValidation.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._enableValidation.errorClass);
    };
    _hasInvalidInput () {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState (inputList) {
        if (this._hasInvalidInput(inputList)) {
            this._buttonElement.classList.add(this._enableValidation.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        }
        else {
            this._buttonElement.classList.remove(this._enableValidation.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled', true);
        }
    }
    _setEventListeners () {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };
}

