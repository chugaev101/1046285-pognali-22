let header = document.querySelector(".page-header");
let headerContainer = document.querySelector(".page-main__title-container");
let headerLogo = document.querySelector(".page-header__logo");
let headerMenu = document.querySelector(".page-header__menu");
let headerMenuButton = document.querySelector(".page-header__menu-toggle");
let promoBlock = document.querySelector(".promo");
let ratesButton = document.querySelector(".rates__button");
let ratesModal = document.querySelector(".rates__modal");
let ratesModalButton = document.querySelector(".rates__modal-button");
let feedbackForm = document.querySelector(".feedback__registration-form");
let feedbackFormInput = document.querySelector(".feedback__registration-form-email");
let addPlan = document.querySelector(".add-plan");
let addPlanPaginationPoints = document.querySelectorAll(".add-plan__pagination-item");
let addPlanSteps = document.querySelectorAll(".add-plan__step");
let addPlanButtonsForward = document.querySelectorAll(".add-plan__button");
let addPlanButtonsBack = document.querySelectorAll(".add-plan__previous-step-button");
let countriesFilter = document.querySelector(".countries-filter");
let countriesFilterSelect = document.querySelector(".countries-filter__select");
let countriesFilterButtonOpen = document.querySelector(".countries-filter__button");
let countriesFilterButtonClose = document.querySelector(".countries-filter__button-roll-up");

// no script deleted

window.onload = function() {
  header.classList.remove("page-header--no-script");

  if (promoBlock) {
    promoBlock.classList.remove("promo--no-script");
  }

  if (headerContainer) {
    headerContainer.classList.remove("page-main__title-container--no-script");
  }

  if (addPlan) {
    addPlan.classList.remove("add-plan--no-script");
  }

  if (countriesFilter) {
    countriesFilter.classList.remove("countries-filter--no-script");
  }
}

// after scroll

const afterScroll = function(block, modifier) {
  window.addEventListener("scroll", function() {

    if (pageYOffset > 1) {
      block.classList.add(modifier);
    } else {
      block.classList.remove(modifier);
    }
  });
}

afterScroll(header, "page-header--after-scroll")
afterScroll(headerLogo, "page-header__logo--after-scroll")

if (promoBlock) {
  afterScroll(promoBlock, "promo--after-scroll")
}

// header menu toggle

headerMenuButton.addEventListener("click", function() {
  headerMenu.classList.toggle("page-header__menu--open");
  headerMenuButton.classList.toggle("menu-toggle--closed");
});

// rates modal toggle

if (ratesModal) {
  ratesButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    ratesModal.classList.add("rates__modal--opened");
  });

  ratesModalButton.addEventListener("click", function() {
    ratesModal.classList.remove("rates__modal--opened");
  });
}

// input email validation

if (feedbackForm) {
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
}

// plan step toggle

for (let i = 0; i < addPlanButtonsForward.length; i++) {
  let button = addPlanButtonsForward[i];
  button.addEventListener("click", clickNextStep)
}

for (let i = 0; i < addPlanButtonsBack.length; i++) {
  let buttonBack = addPlanButtonsBack[i];
  buttonBack.addEventListener("click", clickPreviousStep);
}

function clickNextStep(evt) {
  let currentIndex;

  for (let i = 0; i < addPlanSteps.length - 1; i++) {
    if (addPlanSteps[i].classList.contains("add-plan__step--current")) {
      currentIndex = i;
    }
  }

  if (currentIndex < addPlanSteps.length - 1) {
    evt.preventDefault();
    addPlanSteps[currentIndex].classList.remove("add-plan__step--current");
    addPlanSteps[currentIndex + 1].classList.add("add-plan__step--current");

    addPlanPaginationPoints[currentIndex].classList.remove("add-plan__pagination-item--current");
    addPlanPaginationPoints[currentIndex + 1].classList.add("add-plan__pagination-item--current");
  }

  currentIndex = "";
}

function clickPreviousStep(evt) {
  evt.preventDefault();

  for (let i = 0; i < addPlanSteps.length; i++) {
    if (addPlanSteps[i].classList.contains("add-plan__step--current")) {

      addPlanSteps[i].classList.remove("add-plan__step--current");
      addPlanSteps[i - 1].classList.add("add-plan__step--current");

      addPlanPaginationPoints[i].classList.remove("add-plan__pagination-item--current");
      addPlanPaginationPoints[i - 1].classList.add("add-plan__pagination-item--current");
    }
  }

  currentIndex = "";
}

// countries filter dropdown menu

if (countriesFilter) {
  countriesFilterButtonOpen.addEventListener("click", function() {
    console.log("click");

    countriesFilterButtonOpen.classList.toggle("countries-filter__button--pressed");
    countriesFilterSelect.classList.toggle("countries-filter__select--opened");
  });

  countriesFilterButtonClose.addEventListener("click", function() {
    countriesFilterSelect.classList.remove("countries-filter__select--opened");
  });
}
