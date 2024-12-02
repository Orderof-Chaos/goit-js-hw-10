import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let datetimePicker = document.querySelector("#datetime-picker");
let flatpickrInput = document.querySelector("body > main > input.flatpickr-input.flatpickr-mobile")
let button = document.querySelector("button");
let timer = document.querySelector(".timer");
let userSelectedDate;
function addLeadingZero(value) {
  return String(value).padStart(2, "0")
}
button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0].getTime() < Date.now()) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future"
      });
      button.disabled = true;
    } else {
      button.disabled = false; 
      userSelectedDate = selectedDates[0];
      console.log(userSelectedDate);
    };
    
    
  },
};

flatpickr(datetimePicker, options);

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


function countdownUpdate() {
  if (!userSelectedDate) return
  let countdownMs = userSelectedDate.getTime() - Date.now();
  if (countdownMs <= 0) {
    datetimePicker.disabled = false
    clearInterval(interval);
  } else {
    const { days, hours, minutes, seconds } = convertMs(countdownMs);
    const formattedSeconds = addLeadingZero(seconds);
    const formattedMinutes = addLeadingZero(minutes);
    const formattedHours = addLeadingZero(hours);
    const formattedDays = addLeadingZero(days);    
    timer.querySelector("[data-seconds]").textContent = formattedSeconds;
    timer.querySelector("[data-minutes]").textContent = formattedMinutes;
    timer.querySelector("[data-hours]").textContent = formattedHours;
    timer.querySelector("[data-days]").textContent = formattedDays;
  };
}
button.addEventListener("click", () => {
  let interval = setInterval(countdownUpdate, 1000);
  button.disabled = true;
  datetimePicker.disabled = true;
  flatpickrInput.disabled = true;
})