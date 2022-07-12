export const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__item_type-error',
    errorClass: 'popup__item-error_active',
};

const formElementProfile = document.querySelector('#popup-form-profile');

export const inputName = formElementProfile.querySelector('#popup-profile-name');
export const inputJob = formElementProfile.querySelector('#popup-profile-job');
export const buttonOpenChangeProfile = document.querySelector('.profile__edit-button');
export const buttonAddCard = document.querySelector('.profile__add-button');
export const buttonChangeAvatar = document.querySelector('.profile__avatar-edit')