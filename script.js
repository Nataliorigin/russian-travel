import {langEnArr} from "./lang.js"

class PopupWithImage {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._image = document
      .querySelector(popupSelector)
      .querySelector(".popup__img");
  }

  open(cardTitle, cardImageLink) {
    this._popup.classList.add("popup_opened");
    this._image.alt = cardTitle;
    this._image.src = cardImageLink;
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === escapeKey) {
      this.close();
    }
  };

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
      if (evt.target.classList.contains("popup__button-close")) {
        this.close();
      }
    });
  }
}
const placesImg = document.querySelectorAll('.photo-grid__item')
const popupWithImg = new PopupWithImage('.popup_content_open-image');
const handleCardClick = (cardTitle, cardImageLink) => {
  popupWithImg.open(cardTitle, cardImageLink);
}
placesImg.forEach((item) => item.addEventListener("click", () => handleCardClick(item.alt, item.src)))

popupWithImg.setEventListeners();

const buttonEnLang = document.querySelector('.lang-en');
const buttonRuLang = document.querySelector('.lang-ru');




const changeLanguage = () => {

  let hash = window.location.hash;
  hash = hash.substring(1);
  console.log(hash)

  if (hash === 'En') {
    buttonEnLang.classList.add('header__lang-link_active');
    buttonRuLang.classList.remove('header__lang-link_active');

    document.querySelector('title').textContent = langEnArr["title"];
    document.querySelector('.lng-header__logo').src = langEnArr["header__logo"];
    for (let key in langEnArr) {
      console.log(key)
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
        elem.innerHTML = langEnArr[key];
      }

    }
  } else {
    buttonRuLang.classList.add('header__lang-link_active');
    buttonEnLang.classList.remove('header__lang-link_active');
  }
  }

buttonEnLang.addEventListener('click', () => {
  location.href = window.location.pathname + '#En';
  location.reload();
});
buttonRuLang.addEventListener('click', () => {

  location.href = window.location.pathname;
})

changeLanguage();