import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {initialCards, enableValidation, inputJob, inputName,
    buttonOpenChangeProfile, buttonAddCard} from '../components/utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import './index.css';

const windowImage = new PopupWithImage('#popup_view-image');
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
    return card.createNewCard();
}
const cards = new Section({
        items: initialCards,
        renderer: (item) => {
            const sectionFromCard = createCard(item);
            cards.addItem(sectionFromCard);
        }
    },
    '.elements');

const profileCard = new PopupWithForm({
    popupSelector: '#popup-card-add',
    handleFormSubmit: (data) => {
        const cardElement = createCard(data);
        cards.addItem(cardElement);
    }
})

const popupProfileEdit = new PopupWithForm ({
    popupSelector: '#popup-profile',
    handleFormSubmit: (data) => {
        infoFromUser.setUserInfo({info: data['job'], name: data['name']});
    }
})

buttonOpenChangeProfile.addEventListener('click', () => {
    const profileUser = infoFromUser.getUserInfo();
    inputJob.value = profileUser.info
    inputName.value = profileUser.name;
    formValidators['popup-form'].resetValidation();
    popupProfileEdit.open()
});

buttonAddCard.addEventListener('click', () => {
    profileCard.open();
    formValidators['card-form'].resetValidation();
});
profileCard.setEventListeners();
popupProfileEdit.setEventListeners();
windowImage.setEventListeners();
cards.renderItems();
enableValidationForm(enableValidation);

