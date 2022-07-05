const dateTime = new Date();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];


function displayTime() {
  // get Hour, Minutes and Second
  const dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  //am or pm
  let period;
  hrs && hrs > 12 ? period = "PM" : period = "AM";

  // check to adjust unit to tens
  hrs = checkTime(hrs);
  min = checkTime(min);
  sec = checkTime(sec);

  //Changes 24 hours to 12 hours
  hrs = hrs && hrs >= 13 ? hrs - 12 : hrs;

  let time = document.querySelector(".time");

  time.innerHTML = `${hrs} : ${min} : ${sec} ${period}`;

  function displayDate() {
    let day = days[dateTime.getDay()];
    let month = months[dateTime.getMonth()];
    let numOfDay = dateTime.getDate();

    let date = document.querySelector(".date");
    date.innerHTML = `${day} ${month} ${numOfDay} `;
  }

  displayDate();

  function displayGreeting() {
    let hrs = dateTime.getHours();
    let greet;

    if(hrs<12){
      greet = "Good morning"
    } else if(hrs<17){
      greet = "Good afternoon"
    } else {
      greet = "Good evening"
    }

    // hrs < 12 ? hrs < 16 ? greet = "Good evening" : greet = "Good morning" : greet = "Good afternoon";

    let greeting = document.querySelector(".greeting");
    greeting.innerHTML = `${greet.toUpperCase()}`;
  }

  displayGreeting();

  // Re-runs funstion every 1 second
  setTimeout(displayTime, 1000);

}

function checkTime(i) {
  return (i = i < 10 ? "0" + i : i);
}

displayTime();