const enableValidation = (objectValidation) => {
    const formList = Array.from(document.querySelectorAll(objectValidation.formSelector));
    formList.forEach((formElement) => {

        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });

        setEventListeners(formElement, objectValidation)
    });
};
const setEventListeners = (formElement, objectValidation) => {
    const inputList = Array.from(formElement.querySelectorAll(objectValidation.inputSelector));
    const buttonElement = formElement.querySelector(objectValidation.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, objectValidation);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, objectValidation);
            toggleButtonState(inputList, buttonElement, objectValidation)
        });
    });
};
const checkInputValidity = (formElement, inputElement, objectValidation) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, objectValidation);
    } else {
        hideInputError(formElement, inputElement, objectValidation);
    }
};

const showInputError = (formElement, inputElement, errorMessage, objectValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(objectValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(objectValidation.errorClass);
};

const hideInputError = (formElement, inputElement, objectValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(objectValidation.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(objectValidation.errorClass);

};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, objectValidation) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(objectValidation.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    }
    else {
        buttonElement.classList.remove(objectValidation.inactiveButtonClass);
        buttonElement.removeAttribute('disabled', true);
    }
}
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__item_type-error',
    errorClass: 'popup__item-error_active',
});
