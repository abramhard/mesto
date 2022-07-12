import './index.css';
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

const api = new Api({
    headers: {
        authorization: "ba2ce524-6bcf-43a9-bc60-252e5fad75f4",
        "Content-Type": "application/json",
    },
});
let userId;
Promise.all([api.getInitialCards(), api.getProfileInfo() ])
    .then(([initialCards, userData]) => {
        infoFromUser.setUserInfo(userData);
        userId = userData._id;
        cardsList.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });
const infoFromUser = new UserInfo({
    info: '.profile__job',
    name: '.profile__name',
    avatar: '.profile__avatar'
});

const popupProfileEdit = new PopupWithForm ({
    popupSelector: '#popup-profile',
    handleFormSubmit: (data) => {
        popupProfileEdit.loading(true);
        api
            .changeProfileInfo(data)
            .then((data) => {
                infoFromUser.setUserInfo(data);

            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                popupProfileEdit.loading(false);
            });
    }
});
popupProfileEdit.setEventListeners();

const popupProfileAvatar = new PopupWithForm ({
    popupSelector: '.popup_avatar',
    handleFormSubmit: (data) => {
        popupProfileAvatar.loading(true);
        api
            .changeProfileImg(data)
            .then((data) => {
                infoFromUser.setUserInfo(data);

            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                popupProfileAvatar.loading(false);
            });
    }
});
popupProfileAvatar.setEventListeners();
buttonChangeAvatar.addEventListener('click', () => {
    popupProfileAvatar.open()
    formValidators['popup-form-image'].resetValidation();
});
buttonOpenChangeProfile.addEventListener('click', () => {
    const profileUser = infoFromUser.getUserInfo();
    inputJob.value = profileUser.info
    inputName.value = profileUser.name;
    popupProfileEdit.open()
});

function createCard (data) {
    const card = new Card ({
        data: data,
        cardSelector:'#template-cards',
        userId: userId,
        handleCardClick: (name, link) => {
            windowImage.open(name, link)
        },
        handleDeleteClick: (cardId) => {
            deleteCardPopup.open()
            deleteCardPopup.setConfirmAction(() => {
                api
                    .deleteCard(cardId)
                    .then(() => {
                        card.deleteCard();
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                    });
            });
        },
        handleSetLike: (cardId) => {
            api
                .likeCard(cardId)
                .then((data) => {
                    card.handleLikeCard(data)
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        },
        handleRemoveLike: (cardId) => {
            api
                .deleteLike(cardId)
                .then((data) => {
                    card.handleLikeCard(data)
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        },
    });
    return card.createNewCard();
}

const windowImage = new PopupWithImage('#popup_view-image');
windowImage.setEventListeners();
const deleteCardPopup = new PopupConfirmAction('.popup_delete-card');
deleteCardPopup.setEventListeners();

const cardsList = new Section({
        renderer: (item) => {
            cardsList.addItem(createCard(item));
        }
    },
    '.elements');
const profileCard = new PopupWithForm({
    popupSelector: '#popup-card-add',
    handleFormSubmit: (data) => {
        profileCard.loading(true);
        api
            .addNewCard(data)
            .then((data) => {
                cardsList.addItem(createCard(data))
                profileCard.close()
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                profileCard.loading(false);
            });
    }
});
buttonAddCard.addEventListener('click', () => {
    profileCard.open();
    formValidators['card-form'].resetValidation();
});


profileCard.setEventListeners();
enableValidationForm(enableValidation);