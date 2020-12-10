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

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

export const getPlayerURL = (playerName) =>
  `${baseURL}v1/players?search=${playerName}`;

export const getPlayerStatsURL = (id) =>
  `${baseURL}v1/season_averages?player_ids[]=${id}`;
