const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
// console.log(refs.btnStart);
// console.log(refs.btnStop);
// console.log(refs.body);
refs.btnStart.addEventListener('click', onCklickBtnStart);
refs.btnStop.addEventListener('click', onCklickBtnStop);

function onCklickBtnStart(evt) {
  console.log('start');
}
function onCklickBtnStop(evt) {
  console.log('stop');
}
