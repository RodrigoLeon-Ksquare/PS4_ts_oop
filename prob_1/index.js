//Selecting elements
const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");
const statisticsSection = document.querySelector(".statistics__section");

//Create the request (promise) with fetch
const request = fetch(
  "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
);

//Function that draw the statistics card with the daily timeframe information
const drawDailyCards = (data) => {
  //Erase the cards when the function start
  statisticsSection.innerHTML = " ";
  data.forEach((element) => {
    //For each element in data create the html card with daily timeframe information
    statisticsSection.innerHTML += `
        <article class="card">
        <div class="card__background card__${element.title}">
          <img class="card__image" src="./images/icon-${element.title}.svg" alt="Statistics Icon" />
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${element.title}</p>
            <img src="./images/icon-ellipsis.svg" alt="three dots" />
          </div>
          <div class="card__time">
            <p class="card__hour">${element.timeframes.daily.current}hrs</p>
            <p class="card__previous">Last day-     ${element.timeframes.daily.previous}hrs</p>
          </div>
        </div>
      </article>`;
  });
};

//function that consume the request promise and passing the drawDailyCards function to past daily timeframe information in to the card. Use the clone() method because otherwise the json can only be executed one time
const getDailyData = () => {
  request
    .then((response) => response.clone().json())
    .then((data) => drawDailyCards(data))
    .catch((err) => console.log(err.message));
};

//Function that draw the statistics card with the weekly timeframe information
const drawWeeklyCards = (data) => {
  //Erase the cards when the function start
  statisticsSection.innerHTML = " ";
  data.forEach((element) => {
    //For each element in data create the html card with weekly timeframe information
    statisticsSection.innerHTML += `
        <article class="card">
        <div class="card__background card__${element.title}">
          <img class="card__image" src="./images/icon-${element.title}.svg" alt="Statistics Icon" />
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${element.title}</p>
            <img src="./images/icon-ellipsis.svg" alt="three dots" />
          </div>
          <div class="card__time">
            <p class="card__hour">${element.timeframes.weekly.current}hrs</p>
            <p class="card__previous">Last week-     ${element.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </article>`;
  });
};

//function that consume the request promise and passing the drawWeeklyCards function to past weekly timeframe information in to the card. Use the clone() method because otherwise the json can only be executed one time
const getWeeklyData = () => {
  request
    .then((response) => response.clone().json())
    .then((data) => drawWeeklyCards(data))
    .catch((err) => console.log(err.message));
};

//Function that draw the statistics card with the monthly timeframe information
const drawMonthlyCards = (data) => {
  //Erase the cards when the function start
  statisticsSection.innerHTML = " ";
  data.forEach((element) => {
    //For each element in data create the html card with monthly timeframe information
    statisticsSection.innerHTML += `
        <article class="card">
        <div class="card__background card__${element.title}">
          <img class="card__image" src="./images/icon-${element.title}.svg" alt="Statistics Icon" />
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${element.title}</p>
            <img src="./images/icon-ellipsis.svg" alt="three dots" />
          </div>
          <div class="card__time">
            <p class="card__hour">${element.timeframes.monthly.current}hrs</p>
            <p class="card__previous">Last month-     ${element.timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </article>`;
  });
};

//function that consume the request promise and passing the drawMonthlyCards function to past monthly timeframe information in to the card. Use the clone() method because otherwise the json can only be executed one time
const getMonthlyData = () => {
  request
    .then((response) => response.clone().json())
    .then((data) => drawMonthlyCards(data))
    .catch((err) => console.log(err.message));
};

//Buttons Event Listeners
dailyBtn.addEventListener("click", getDailyData);
weeklyBtn.addEventListener("click", getWeeklyData);
monthlyBtn.addEventListener("click", getMonthlyData);

//When the page load, automatically the cards with the weekly information will be appear
window.onload = getWeeklyData;
