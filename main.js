(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._enableValidation=e,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(this._enableValidation.inputSelector)),this._buttonElement=this._formElement.querySelector(this._enableValidation.submitButtonSelector)}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._enableValidation.inputErrorClass),n.textContent=t,n.classList.add(this._enableValidation.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._enableValidation.inputErrorClass),t.textContent="",t.classList.remove(this._enableValidation.errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput(e)?(this._buttonElement.classList.add(this._enableValidation.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._enableValidation.inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._templateElements=n,this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateElements).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._elementCard.querySelector(".element__image").addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)})),this._elementCard.querySelector(".element__like-button").addEventListener("click",this._pressButtonLike),this._elementCard.querySelector(".element__delete-basket").addEventListener("click",(function(){return e._deleteCardInPage()}))}},{key:"_pressButtonLike",value:function(e){e.target.classList.toggle("element__like-button_active")}},{key:"_deleteCardInPage",value:function(){this._elementCard.remove(),this._elementCard=null}},{key:"createNewCard",value:function(){return this._elementCard=this._getTemplate(),this._setEventListeners(),this._image=this._elementCard.querySelector(".element__image"),this._image.src=this._link,this._image.alt=this._name,this._titleCard=this._elementCard.querySelector(".element__title"),this._titleCard.textContent=this._name,this._elementCard}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),o=document.querySelector("#popup-form-profile"),i=o.querySelector("#popup-profile-name"),a=o.querySelector("#popup-profile-job"),u=document.querySelector("#popup-profile"),s=document.querySelector("#popup-card-add"),l=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__add-button"),p=document.querySelector("#popup_view-image");function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._closePopupMouseDown=this._closePopupMouseDown.bind(this),this._pressButtonEsc=this._pressButtonEsc.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._pressButtonEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._pressButtonEsc)}},{key:"_pressButtonEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closePopupMouseDown",value:function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._closePopupMouseDown)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=Array.from(t._form.querySelectorAll(".popup__item")),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;_(g(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){_(g(a.prototype),"close",this).call(this),this._form.reset()}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageShowCard=t._popup.querySelector(".popup__image"),t._nameShowCard=t._popup.querySelector(".popup__subtitle"),t}return t=a,(n=[{key:"open",value:function(e,t){this._imageShowCard.src=t,this._imageShowCard.alt=e,this._nameShowCard.textContent=e,S(L(a.prototype),"open",this).call(this)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.info,r=t.name;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._info=document.querySelector(n),this._name=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileValues={},this._profileValues.info=this._info.textContent,this._profileValues.name=this._name.textContent,this._profileValues}},{key:"setUserInfo",value:function(e){this._info.textContent=e.info,this._name.textContent=e.name}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x=new P(p),R=new I({info:".profile__job",name:".profile__name"}),T={};function A(e){return new r({data:e,handleCardClick:function(e,t){x.open(e,t)}},"#template-cards")}var D,F=new B({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=A(e).createNewCard();F.addItem(t)}},".elements"),M=new k({popupSelector:s,handleFormSubmit:function(e){e.name=e.name,e.link=e.link;var t=A(e).createNewCard();F.addItem(t)}}),N=new k({popupSelector:u,handleFormSubmit:function(e){R.setUserInfo({info:e.job,name:e.name})}});l.addEventListener("click",(function(){var e=R.getUserInfo();a.value=e.info,i.value=e.name,T["popup-form"].resetValidation(),N.open()})),c.addEventListener("click",(function(){M.open(),T["card-form"].resetValidation()})),M.setEventListeners(),N.setEventListeners(),x.setEventListeners(),F.renderItems(),D={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__item_type-error",errorClass:"popup__item-error_active"},Array.from(document.querySelectorAll(D.formSelector)).forEach((function(e){var n=new t(D,e);n.enableValidation();var r=e.getAttribute("name");T[r]=n}))})();