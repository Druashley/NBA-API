const baseURL = "https://www.balldontlie.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = Date().currentYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

console.log(currentYear);
console.log(currentMonth);
console.log(currentDay);
