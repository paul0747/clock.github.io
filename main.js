let getCurrentTime = () => {
  const date = new Date();
  let getHour = date.getHours();
  let getMinutes = date.getMinutes();
  let getSeconds = date.getSeconds();
  let session = "AM";
  if (getHour == 0) {
    getHour = 12;
  }
  if (getHour > 12) {
    getHour = getHour - 12;
    session = "PM";
  }
  if (getHour < 10) {
    getHour = `0${getHour}`;
  }
  if (getMinutes < 10) {
    getMinutes = `0${getMinutes}`;
  }
  if (getSeconds < 10) {
    getSeconds = `0${getSeconds}`;
  }

  let time = `${getHour}:${getMinutes}:${getSeconds} ${session}`;
  document.getElementById("clockdisplay").innerText = time;
  document.getElementById("clockdisplay").textContent = time;

  setTimeout(getCurrentTime, 1000);
};
getCurrentTime();
