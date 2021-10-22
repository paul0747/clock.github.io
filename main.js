let getCurrentTime = () => {
  const date = new Date();
  let getHour = date.getHours();
  let getMinutes = date.getMinutes();
  let getSeconds = date.getSeconds();
  let session = "am";

  if (getHour === 0) {
    getHour = 12;
  }
  if (getHour > 12) {
    getHour = getHour - 12;
    session = "PM";
  }
  if (getHour < 10) {
    let getHour = `0${getHour}`;
    // let time = `0${getHour}:${getMinutes}:${getSeconds} ${session}`;
    // return time;
    return h;
  }
  if (getMinutes < 10) {
    let getMinutes = `0${getMinutes}`;
    // let time = `${getHour}:0${getMinutes}:${getSeconds} ${session}`;
    // return time;
    return m;
  }
  if (getSeconds < 10) {
    let getSeconds = `0${getSeconds}`;
    // let time = `${getHour}:${getMinutes}:0${getSeconds} ${session}`;
    // return time;
    return s;
  }
  //   else {
  //     let time = `${getHour}:${getMinutes}:${getSeconds} ${session}`;
  //     return time;
  //   }

  let time = `${getHour}:${getMinutes}:${getSeconds} ${session}`;
  document.getElementById("clockdisplay").innerText = time;
  document.getElementById("clockdisplay").textContent = time;

  setTimeout(getCurrentTime, 1000);
};
getCurrentTime();
