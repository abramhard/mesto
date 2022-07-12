(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=e.headers}var n,r;return n=t,(r=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfileInfo",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-44/users/me",{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-44/cards",{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"changeProfileInfo",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-44/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then(this._getResponseData)}},{key:"changeProfileImg",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-44/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}},{key:"addNewCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-44/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.cardName,link:e.link})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-44/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"likeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-44/cards/".concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-44/cards/".concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._enableValidation=t,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(this._enableValidation.inputSelector)),this._buttonElement=this._formElement.querySelector(this._enableValidation.submitButtonSelector)}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._enableValidation.inputErrorClass),n.textContent=t,n.classList.add(this._enableValidation.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._enableValidation.inputErrorClass),t.textContent="",t.classList.remove(this._enableValidation.errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput(e)?(this._buttonElement.classList.add(this._enableValidation.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._enableValidation.inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.data,r=t.cardSelector,o=t.userId,i=t.handleCardClick,a=t.handleDeleteClick,c=t.handleSetLike,u=t.handleRemoveLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._likes=n.likes,this._cardId=n._id,this._cardSelector=r,this._userId=o,this._cardOwnerId=n.owner._id,this._handleCardClick=i,this._handleSetLike=c,this._handleRemoveLike=u,this._handleDeleteClick=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._buttonDelete.addEventListener("click",(function(){e._handleDeleteClick(e._cardId)})),this._buttonLike.addEventListener("click",(function(){e._buttonLike.classList.contains("element__like-btn_active")?e._handleRemoveLike(e._cardId):e._handleSetLike(e._cardId)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"handleLikeCard",value:function(e){this._likes=e.likes,this._likesNumber.textContent=this._likes.length,this._buttonLike.classList.toggle("element__like-btn_active")}},{key:"_isCardLiked",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._buttonLike.classList.add("element__like-btn_active")}},{key:"createNewCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._buttonLike=this._element.querySelector(".element__like-btn"),this._buttonDelete=this._element.querySelector(".element__delete-btn"),this._likesNumber=this._element.querySelector(".element__likes-number"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._checkDeleteBtn(),this._isCardLiked(),this._likesNumber.textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"_checkDeleteBtn",value:function(){this._userId!==this._cardOwnerId&&this._buttonDelete.remove()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a=document.querySelector("#popup-form-profile"),c=a.querySelector("#popup-profile-name"),u=a.querySelector("#popup-profile-job"),l=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),f=document.querySelector(".profile__avatar-edit");function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._form=this._popup.querySelector(".popup__form"),this._closePopupMouseDown=this._closePopupMouseDown.bind(this),this._pressButtonEsc=this._pressButtonEsc.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._pressButtonEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._pressButtonEsc)}},{key:"_pressButtonEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closePopupMouseDown",value:function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._closePopupMouseDown)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__item"),t._popupSubmitButton=t._popup.querySelector(".popup__button-save"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;_(g(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){_(g(a.prototype),"close",this).call(this),this._form.reset()}},{key:"loading",value:function(e){this._popupSubmitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"setConfirmAction",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;E(P(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function B(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageShowCard=t._popup.querySelector(".popup__image"),t._nameShowCard=t._popup.querySelector(".popup__subtitle"),t}return t=a,(n=[{key:"open",value:function(e,t){this._imageShowCard.src=t,this._imageShowCard.alt=e,this._nameShowCard.textContent=e,D(V(a.prototype),"open",this).call(this)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(h);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.info,r=t.name,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._info=document.querySelector(n),this._name=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileValues={info:this._info.textContent,name:this._name.textContent,avatar:this._avatar.src},this._profileValues}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._info.textContent=e.about,this._avatar.src=e.avatar}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var J,G={},H=new t({headers:{authorization:"ba2ce524-6bcf-43a9-bc60-252e5fad75f4","Content-Type":"application/json"}});Promise.all([H.getInitialCards(),H.getProfileInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z.setUserInfo(i),J=i._id,Z.renderItems(o)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var z=new N({info:".profile__job",name:".profile__name",avatar:".profile__avatar"}),$=new k({popupSelector:"#popup-profile",handleFormSubmit:function(e){$.loading(!0),H.changeProfileInfo(e).then((function(e){z.setUserInfo(e),$.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){$.loading(!1)}))}});$.setEventListeners();var K=new k({popupSelector:".popup_avatar",handleFormSubmit:function(e){K.loading(!0),H.changeProfileImg(e).then((function(e){z.setUserInfo(e),$.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){K.loading(!1)}))}});function Q(e){var t=new i({data:e,cardSelector:"#template-cards",userId:J,handleCardClick:function(e,t){W.open(e,t)},handleDeleteClick:function(e){X.open(),X.setConfirmAction((function(){H.deleteCard(e).then((function(){t.deleteCard(),X.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},handleSetLike:function(e){H.likeCard(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleRemoveLike:function(e){H.deleteLike(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return t.createNewCard()}K.setEventListeners(),f.addEventListener("click",(function(){K.open()})),l.addEventListener("click",(function(){var e=z.getUserInfo();u.value=e.info,c.value=e.name,$.open()}));var W=new x("#popup_view-image");W.setEventListeners();var X=new j(".popup_delete-card");X.setEventListeners();var Y,Z=new F({renderer:function(e){Z.addItem(Q(e))}},".elements"),ee=new k({popupSelector:"#popup-card-add",handleFormSubmit:function(e){ee.loading(!0),H.addNewCard(e).then((function(e){Z.addItem(Q(e)),ee.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ee.loading(!1)}))}});s.addEventListener("click",(function(){ee.open()})),ee.setEventListeners(),Y={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__item_type-error",errorClass:"popup__item-error_active"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(e){var t=new r(Y,e);t.enableValidation();var n=e.getAttribute("name");G[n]=t}))})();