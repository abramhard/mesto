import Api from "../components/Api.js";
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import {enableValidation, inputJob, inputName,
    buttonOpenChangeProfile, buttonAddCard, buttonChangeAvatar} from '../components/utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirmAction from "../components/PopupConfirmAction.js";
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import './index.css';
let userId;
const api = new Api({
    baseURL: "https://mesto.nomoreparties.co/v1/cohort-44",
    headers: {
        authorization: "ba2ce524-6bcf-43a9-bc60-252e5fad75f4",
        "Content-Type": "application/json",
    },
});
const deleteCardPopup = new PopupConfirmAction('.popup_delete-card')
const windowImage = new PopupWithImage('#popup_view-image');
const infoFromUser = new UserInfo({
    info: '.profile__job',
    name: '.profile__name',
    avatar: '.profile__avatar'
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

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([data, initialCards]) => {
    userId = data._id;
    infoFromUser.setUserInfo(data);
    infoFromUser.setUserAvatar(data);
    cards.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });

function createCard (item) {
    const card = new Card ({
        cardInfo: item,
        handleCardClick: (name, link) => {
            windowImage.open(name, link)
        },
        handleSetLikeCard: (item) => {
            api
                .setLike(item)
                .then((data) => {
                    card.addLikeCard(data)
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        },
        handleRemoveLikeCard: (item) => {
            api
                .deleteLike(item)
                .then((data) => {
                    card.deleteLikeCard(data)
            })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        },
        handleCardDelete: (item) => {
            deleteCardPopup.open()
            deleteCardPopup.setConfirmAction(() => {
                api
                    .deleteCard(item)
                    .then(() => {
                        card.deleteCardInPage();
                        deleteCardPopup.close()
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                    });
            })
        },
        userId: userId,

    },  '#template-cards');
    return card.createNewCard();
}
const cards = new Section({
        renderer: (item) => {
            cards.addItem(createCard(item));
        }
    },
    '.elements');

const profileCard = new PopupWithForm({
    popupSelector: '#popup-card-add',
    handleFormSubmit: (data) => {
        profileCard.renderLoading(true);
        api
            .addCard(data)
            .then((data) => {
                cards.addItem(createCard(data))
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                profileCard.renderLoading(false);
            });
    }
})

const popupProfileEdit = new PopupWithForm ({
    popupSelector: '#popup-profile',
    handleFormSubmit: (data) => {
        popupProfileEdit.renderLoading(true);
            api
                .editUserInfo(data)
                .then((data) => {
                    infoFromUser.setUserInfo(data);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                })
                .finally(() => {
                    popupProfileEdit.renderLoading(false);
                });
    }
})
const popupProfileAvatar = new PopupWithForm ({
    popupSelector: '.popup_avatar',
    handleFormSubmit: (data) => {
        popupProfileAvatar.renderLoading(true);
            api
                .editAvatar(data)
                .then((data) => {
                    infoFromUser.setUserAvatar(data);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                })
                .finally(() => {
                    popupProfileAvatar.renderLoading(false);
                });
    }
})
buttonOpenChangeProfile.addEventListener('click', () => {
    const profileUser = infoFromUser.getUserInfo();
    inputJob.value = profileUser.info
    inputName.value = profileUser.name;

    popupProfileEdit.open()
});

buttonAddCard.addEventListener('click', () => {
    profileCard.open();
    formValidators['card-form'].resetValidation();
});
buttonChangeAvatar.addEventListener('click', () => {
    popupProfileAvatar.open()
    formValidators['popup-form-image'].resetValidation();
})


profileCard.setEventListeners();
popupProfileEdit.setEventListeners();
windowImage.setEventListeners();
deleteCardPopup.setEventListeners()
popupProfileAvatar.setEventListeners()
enableValidationForm(enableValidation);

