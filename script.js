function dateAscriber() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
/************************************************/
  let hoursSpan = document.getElementById("hours");
  let minutesSpan= document.getElementById("minutes");
  let secondsSpan = document.getElementById("seconds");

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;
}
setInterval(dateAscriber, 100);
