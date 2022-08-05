// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//***************************working model****************************************** */

// const deadline = new Date(2022, 7, 5);
// const refs = {
//   secondsEl: document.querySelector('.value[data-seconds]'),
//   minutesEl: document.querySelector('.value[data-minutes]'),
//   hoursEl: document.querySelector('.value[data-hours]'),
//   daysEl: document.querySelector('.value[data-days]'),
// };

// function timer() {
//   const currentDate = new Date();
//   const delta = deadline - currentDate;
//   const seconds = Math.floor(delta / 1000) % 60;
//   const minutes = Math.floor(delta / 1000 / 60) % 60;
//   const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
//   const days = Math.floor(delta / 1000 / 60 / 60 / 24);
//   refs.secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
//   refs.minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
//   refs.hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
//   refs.daysEl.textContent = days < 10 ? `0${days}` : days;
// }
// setInterval(timer, 1000);
//**************************working model******************************************* */

//**************************another model******************************************* */

//**************************refs******************************************* */

const refs = {
  secondsEl: document.querySelector('.value[data-seconds]'),
  minutesEl: document.querySelector('.value[data-minutes]'),
  hoursEl: document.querySelector('.value[data-hours]'),
  daysEl: document.querySelector('.value[data-days]'),
  inputEl: document.querySelector('#datetime-picker'),
  btnStartEl: document.querySelector('button[data-start]'),
};
const DISABLED = 'disabled';
refs.btnStartEl.setAttribute(DISABLED, DISABLED);
let deadline = null;

//**************************options for the library flatpickr******************************************* */

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadline = selectedDates[0].getTime();
    // console.log(selectedDates);
    // console.log(deadline);
    const delta = deadline - Date.now();
    // console.log(delta);
    if (delta <= 0) {
      // alert('Please choose a date in the future!');
      Notify.failure('Please choose a date in the future!');
      return;
    }
    refs.btnStartEl.removeAttribute(DISABLED);
  },
};

flatpickr('#datetime-picker', options);

refs.btnStartEl.addEventListener('click', onClickBtnStart);

let timerId = null;

function onClickBtnStart(evt) {
  refs.btnStartEl.setAttribute(DISABLED, DISABLED);
  refs.inputEl.setAttribute(DISABLED, DISABLED);
  if (timerId > 0) {
    return;
  }
  timerId = setInterval(() => {
    const delta = deadline - Date.now();
    const { days, hours, minutes, seconds } = convertMs(delta);
    if (delta >= 0) {
      refs.secondsEl.textContent = addLeadingZero(seconds);
      refs.minutesEl.textContent = addLeadingZero(minutes);
      refs.hoursEl.textContent = addLeadingZero(hours);
      refs.daysEl.textContent = addLeadingZero(days);
    } else {
      Notify.success('The timer stopped.', {
        timeout: 4000,
      });
      // Notify.failure('The timer stopped.', { timeout: 2000 });
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
