/*********************************Get the links on the elements************************* */
const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
/******************************Const for class***************************** */
const DISABLE_CLASS = 'disabled';

/************************************EventListener************************************* */
refs.btnStart.addEventListener('click', onCklickBtnStart);
refs.btnStop.addEventListener('click', onCklickBtnStop);

/************************************Timer ID**************************************** */
let timerId = null;

/******************************Function starts a interval and changes the color****** */
function onCklickBtnStart(evt) {
  const currentEl = evt.target;
  if (currentEl.classList.contains(DISABLE_CLASS)) {
    return;
  }
  addRemoveDisabledClass(currentEl, refs.btnStop, DISABLE_CLASS);
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
/************************************Function stop interval****** */
function onCklickBtnStop(evt) {
  if (timerId === null) {
    return;
  }
  const currentEl = evt.target;
  addRemoveDisabledClass(currentEl, refs.btnStart, DISABLE_CLASS);
  clearInterval(timerId);
}
/**********************************Function adds or removes class******************* */

function addRemoveDisabledClass(currentEl, disabledEl, classAdd) {
  if (currentEl.classList.contains(classAdd)) {
    return;
  }
  currentEl.classList.add(classAdd);
  disabledEl.classList.remove(classAdd);
}
/***********************************Function generation random color ******************************************** */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
/******************************************************************************* */
