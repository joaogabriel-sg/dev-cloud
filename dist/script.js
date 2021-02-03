"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// DEBOUNCE ===========================================
function debounce(cb, delay) {
  var timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      cb(args);
      timer = null;
    }, delay);
  };
} // MENU MOBILE ========================================


var menu = document.querySelector('.menu');
var btnBurger = document.querySelector('.burger');

function openOrCloseMenu() {
  menu.classList.toggle('active');
  btnBurger.classList.toggle('active');
  document.documentElement.classList.toggle('no-scroll');
}

btnBurger.addEventListener('click', openOrCloseMenu); // FAQ QUESTIONS ======================================

var faqQuestions = _toConsumableArray(document.querySelectorAll('.question'));

function openOrCloseQuestion(e) {
  var question = e.currentTarget;
  var questionContainer = question.parentNode;
  questionContainer.classList.toggle('active');
}

faqQuestions.forEach(function (faqQuestion) {
  faqQuestion.addEventListener('click', openOrCloseQuestion);
}); // SCROLL TO SECTION ==================================

var menuItems = _toConsumableArray(document.querySelectorAll('a[data-smooth]'));

function scrollToCorrespondingSection(e) {
  e.preventDefault();
  var item = e.currentTarget;
  var destinyHash = item.getAttribute('href').slice(1);
  var targetSection = document.getElementById(destinyHash);
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  if (menu.classList.contains('active')) openOrCloseMenu();
}

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', scrollToCorrespondingSection);
}); // SHOW WHEN SCROLL ===================================

var itemsToShow = _toConsumableArray(document.querySelectorAll('[data-show]'));

function verifyAndShowItemOnScroll() {
  console.clear();
  itemsToShow.forEach(function (itemToShow) {
    var itemDistanceToTop = window.pageYOffset + itemToShow.getBoundingClientRect().top;
    var halfWindow = window.innerHeight * 0.95;
    var newItemDistanceToTop = itemDistanceToTop - halfWindow - 50;

    if (window.pageYOffset > newItemDistanceToTop) {
      itemToShow.classList.add('show');
    } else {
      itemToShow.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', debounce(verifyAndShowItemOnScroll, 50));
verifyAndShowItemOnScroll();