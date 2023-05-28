const todays = document.querySelector("#date");
const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daynames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = monthList[date.getMonth() - 1];
  const day = String(date.getDate()).padStart(2, "0");
  const dayname = daynames[date.getDay()];

  todays.innerText = `${month}.${day}.${year}.${dayname}`;
}

getDate();
