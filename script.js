const hourEL = document.getElementById("hours");
const minuteEL = document.getElementById("minutes");
const secondEL = document.getElementById("seconds");
const ampmel = document.getElementById("ampm");

function updateClock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = "AM";
  if (hour > 12) {
    h = hour - 12;
    ampm = "PM";
  }
  hourEL.innerText = hour;
  minuteEL.innerText = minute;
  secondEL.innerText = second;
  ampmel.innerText = ampm;
  setTimeout(() => {
    updateClock()
  }, 1000)
}
updateClock();
