// DEBOUNCE ===========================================
function debounce(cb, delay) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(args);
      timer = null;
    }, delay);
  };
}

// MENU MOBILE ========================================
const menu = document.querySelector('.menu');
const btnBurger = document.querySelector('.burger');

function openOrCloseMenu() {
  menu.classList.toggle('active');
  btnBurger.classList.toggle('active');
  document.documentElement.classList.toggle('no-scroll');
}

btnBurger.addEventListener('click', openOrCloseMenu);

// FAQ QUESTIONS ======================================
const faqQuestions = [...document.querySelectorAll('.question')];

function openOrCloseQuestion(e) {
  const question = e.currentTarget;
  const questionContainer = question.parentNode;
  questionContainer.classList.toggle('active');
}

faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener('click', openOrCloseQuestion);
});

// SCROLL TO SECTION ==================================
const menuItems = [...document.querySelectorAll('a[data-smooth]')];

function scrollToCorrespondingSection(e) {
  e.preventDefault();
  const item = e.currentTarget;
  const destinyHash = item.getAttribute('href').slice(1);

  const targetSection = document.getElementById(destinyHash);
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  if (menu.classList.contains('active')) openOrCloseMenu();
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', scrollToCorrespondingSection);
});

// SHOW WHEN SCROLL ===================================
const itemsToShow = [...document.querySelectorAll('[data-show]')];

function verifyAndShowItemOnScroll() {
  console.clear();
  itemsToShow.forEach((itemToShow) => {
    const itemDistanceToTop = window.pageYOffset + itemToShow.getBoundingClientRect().top;
    const halfWindow = window.innerHeight * 0.95;
    const newItemDistanceToTop = itemDistanceToTop - halfWindow - 50;

    if (window.pageYOffset > newItemDistanceToTop) {
      itemToShow.classList.add('show');
    } else {
      itemToShow.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', debounce(verifyAndShowItemOnScroll, 50));
verifyAndShowItemOnScroll();
