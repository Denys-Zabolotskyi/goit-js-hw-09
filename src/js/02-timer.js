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
};
//**************************options for the library flatpickr******************************************* */
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
//************************** library initialization******************************************* */
flatpickr('#datetime-picker', options);
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//**************************another model******************************************* */
