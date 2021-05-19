let header = document.querySelector(".page-header");
let headerLogo = document.querySelector(".page-header__logo");
let headerMenu = document.querySelector(".page-header__menu");
let headerMenuButton = document.querySelector(".page-header__menu-toggle");
let promoBlock = document.querySelector(".promo");
let ratesButton = document.querySelector(".rates__button");
let ratesModal = document.querySelector(".rates__modal");
let ratesModalButton = document.querySelector(".rates__modal-button");
let feedbackForm = document.querySelector(".feedback__registration-form");
let feedbackFormInput = document.querySelector(".feedback__registration-form-email");

// no script deleted

window.onload = function() {
  header.classList.remove("page-header--no-script");
}

// header after scroll

window.addEventListener("scroll", function() {

  if (pageYOffset > 0) {
    header.classList.add("page-header--after-scroll");
    headerLogo.classList.add("page-header__logo--after-scroll");
    promoBlock.classList.add("promo--after-scroll");
  } else {
    header.classList.remove("page-header--after-scroll");
    headerLogo.classList.remove("page-header__logo--after-scroll");
    promoBlock.classList.remove("promo--after-scroll");
  }
});

// header menu toggle

headerMenuButton.addEventListener("click", function() {
  headerMenu.classList.toggle("page-header__menu--open");
  headerMenuButton.classList.toggle("menu-toggle--closed");
});

// rates modal toggle

ratesButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  ratesModal.classList.add("rates__modal--opened");
});

ratesModalButton.addEventListener("click", function() {
  ratesModal.classList.remove("rates__modal--opened");
});

// input email validation

feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackFormInput.value) {
    evt.preventDefault();

    let i = 0;

    let error = setInterval(function() {
      i++;

      feedbackFormInput.classList.toggle("feedback__registration-form-email--error");

      if (i === 6) {
        clearInterval(error);
      }
    }, 200);
  }
});
