import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import {initialCards, enableValidation, inputJob, inputName,
    popupProfile, popupCardAdd, buttonOpenChangeProfile,
    buttonAddCard, imageWindowCard } from '../scripts/utils/constants.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js';
import Section from '../scripts/Section.js';
import './index.css';

const windowImage = new PopupWithImage(imageWindowCard);
const infoFromUser = new UserInfo({
    info: '.profile__job',
    name: '.profile__name'
});
const formValidators = {};
const enableValidationForm = (enableValidation) => {
    const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));
    formList.forEach((formElement) => {
        const validationForm = new FormValidator(enableValidation, formElement)
        validationForm.enableValidation();
        const formName = formElement.getAttribute('name');
        formValidators[formName] = validationForm;
    });
}

function createCard (item) {
    const card = new Card ({
        data: item,
        handleCardClick: (name, link) => {
            windowImage.open(name, link)
        }
    },  '#template-cards');
    return card;
}
const cards = new Section({
        items: initialCards,
        renderer: (item) => {
            const sectionFromCard = createCard(item).createNewCard();
            cards.addItem(sectionFromCard);
        }
    },
    '.elements');

const addCardInProfile = new PopupWithForm({
    popupSelector: popupCardAdd,
    handleFormSubmit: (data) => {
        data ['name'] = data ['name'];
        data ['link'] = data ['link'];
        const cardElement = createCard(data).createNewCard();
        cards.addItem(cardElement);
    }
})

const editPopupProfile = new PopupWithForm ({
    popupSelector: popupProfile,
    handleFormSubmit: (data) => {
        infoFromUser.setUserInfo({info: data['job'], name: data['name']});
    }
})

buttonOpenChangeProfile.addEventListener('click', () => {
    const profileUser = infoFromUser.getUserInfo();
    inputJob.value = profileUser.info
    inputName.value = profileUser.name;
    formValidators['popup-form'].resetValidation();
    editPopupProfile.open()
});

buttonAddCard.addEventListener('click', () => {
    addCardInProfile.open();
    formValidators['card-form'].resetValidation();
});
addCardInProfile.setEventListeners();
editPopupProfile.setEventListeners();
windowImage.setEventListeners();
cards.renderItems();
enableValidationForm(enableValidation);

