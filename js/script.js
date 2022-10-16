// 60d465ff898de72b202b35030315ce9d     Api Key

// global Info
const curWeather = document.querySelector(".info-cloud");
const weatherBlockItem = document.querySelectorAll(".weather__timeBlock__article");

// Location
let BrowserLocation = window.location.href;
let partLocation = BrowserLocation.substring(BrowserLocation.length - 12);
let isMainPage = partLocation.includes("index.html") || partLocation.includes("ther_Site/");
let isDnipro = partLocation.includes("dnipro.html");

// set Current Date
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currDay = document.querySelector(".date-day");
let currDate = document.querySelector(".date-num");
let curDay = new Date(Date.now());

const transformDate = (index) => {
   return week[index];
}
if (isMainPage) {
   currDay.innerHTML = transformDate(curDay.getDay());
   currDate.innerHTML = `${curDay.getDate()}.${curDay.getMonth() + 1}.${curDay.getFullYear()}`;
}
if (isDnipro) {
   currDay.innerHTML = transformDate(curDay.getDay());
   currDate.innerHTML = `${curDay.getDate()}.${curDay.getMonth() + 1}.${curDay.getFullYear()}`;
}
// if (nextCity) {}


// API request
async function getCurrentWether() {
   let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.45&lon=35.04&appid=60d465ff898de72b202b35030315ce9d');
   let list = await promise.json();

   let sity = list.name;
   let temp = normalizeTemp(list.main.temp);
   let humidity = list.main.humidity;
   let weather = list.weather[0];
   let mainDesc = weather.main;
   let windSpeed = list.wind.speed;

   // Index
   if (isMainPage) {

      const cityName = document.querySelector(".weather__city__name-name");
      const curTemp = document.querySelector(".weather__city__info-temp");
      const IndexBlockImg = document.querySelector(".weather__city__info-img");

      cityName.innerHTML = `${sity}, Ukraine`;
      curTemp.innerHTML = `${temp}°`;
      curWeather.innerHTML = mainDesc;
      curWeather.innerHTML = mainDesc;
      showCurrentImg(IndexBlockImg, mainDesc);
   }

   // Dnipro
   if (isDnipro) {

      const curDniproTemp = document.querySelector(".dnipro__temp");
      const cityDniproName = document.querySelector(".city-name");
      const humidityDnipro = document.querySelector(".info__humidity");
      const windDnipro = document.querySelector(".info__wind");
      const imgBlockDnipro = document.querySelector(".weather__img");
      const weatherDate = document.querySelector(".weather__date");
      const itemAddInfo = document.createElement("div");

      cityDniproName.innerHTML = `${sity}, Ukraine`;
      curDniproTemp.innerHTML = `${temp}°`;
      humidityDnipro.innerHTML = `${humidity}%`;
      curWeather.innerHTML = mainDesc;
      windDnipro.innerHTML = `${windSpeed.toFixed(1)} km/h`;
      itemAddInfo.classList.add("item__add__info");
      itemAddInfo.innerHTML = weather.description;

      weatherDate.append(itemAddInfo);
      showCurrentImg(imgBlockDnipro, mainDesc);

      // Buttons "day"
      let day1 = document.querySelector(".day_1");
      let day2 = document.querySelector(".day_2");
      let day3 = document.querySelector(".day_3");
      let day4 = document.querySelector(".day_4");
      day1 != undefined ? day1.innerHTML = transformDate(curDay.getDay() + 1) : day1.innerHTML = undefined;
      day2 != undefined ? day2.innerHTML = transformDate(curDay.getDay() + 2) : day2.innerHTML = undefined;
      day3 != undefined ? day3.innerHTML = transformDate(curDay.getDay() + 3) : day3.innerHTML = undefined;
      day4 != undefined ? day4.innerHTML = transformDate(curDay.getDay() + 4) : day4.innerHTML = undefined;
   }

}
getCurrentWether();

// get Day Forecast
async function getForecastWeather() {
   let promise = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=48.46&lon=35.04&appid=60d465ff898de72b202b35030315ce9d');
   if (promise.ok) {
      let list = await promise.json();
      let array = list.list;

      for (let i = 0; i < 5; i++) {
         // Dnipro
         if (isDnipro) {

            let itemTime = (array[i].dt_txt).slice(10, array[i].dt_txt.length - 3);
            let itemWeather = array[i].weather[0].main;
            let itemTemp = (array[i].main.temp - 273.15).toFixed(0) + "°";
            let itemFeels = "ощущ. как: " + (array[i].main.feels_like - 273.15).toFixed(0) + "°";
            let windDeg = array[i].wind.deg;
            let itemWind = "ветер: " + array[i].wind.speed.toFixed(1) + " км/ч";

            // create elem
            let newBlockItem = document.createElement("div");
            newBlockItem.classList.add("weather__timeBlock__item");

            // set data
            showTime(newBlockItem, itemTime);
            showImg(newBlockItem, itemWeather, itemTime);
            showWeatherInfo(newBlockItem, itemWeather);
            showTemperature(newBlockItem, itemTemp);
            showFeels(newBlockItem, itemFeels);
            showWindImage(newBlockItem, windDeg);
            showWind(newBlockItem, itemWind);

            //
            weatherBlockItem[i].append(newBlockItem);
         }
      }

   } else {
      console.log("Ошибка HTTP: " + response.status);
   }
}
getForecastWeather();


// get Sity lat and lon ( if need )
async function getID() {
   let promise = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Dnipro&limit=5&appid=60d465ff898de72b202b35030315ce9d');
   let list = await promise.json();

}



// function"S

const normalizeTemp = (temp) => {
   return (temp - 273.15).toFixed(0);
}

const showCurrentImg = (appendBlock, weatherInfo) => {
   const imgCurImg = document.createElement("img");
   if (weatherInfo == "Clear") {
      imgCurImg.setAttribute("src", "img/weatheriCO/sun.png");
   } else if (weatherInfo == "Clouds") {
      imgCurImg.setAttribute("src", "img/weatheriCO/cloud.png");
   } else {
      //####
   }
   appendBlock.append(imgCurImg);
}

const showTime = (appendBlock, setTime) => {
   const divTime = document.createElement("div");
   divTime.classList.add("weather__timeBlock__item__time");
   let time = document.createElement("div");
   time.classList.add("time");
   time.innerHTML = setTime;
   divTime.append(time);
   appendBlock.append(divTime);
}

//adding image cases
const showImg = (appendBlock, setWeather, time) => {
   const divImg = document.createElement("div");
   divImg.classList.add("weather__timeBlock__item__img");
   let imga = document.createElement("img");
   imga.setAttribute("alt", "img");
   let skyNow = setWeather;

   switch (skyNow) {
      case "Clear":
         checkNigthTime(time) ?
            imga.setAttribute("src", "img/weatheriCO/clearNigth.png")
            : imga.setAttribute("src", "img/weatheriCO/sun.png");

         break;
      case "Clouds":
         checkNigthTime(time) ?
            imga.setAttribute("src", "img/weatheriCO/cloudNight.png")
            : imga.setAttribute("src", "img/weatheriCO/cloud.png");
         break;
      // case #####:
   }

   divImg.append(imga);
   appendBlock.append(divImg)
};

const showWeatherInfo = (appendBlock, itemWeatherInfo) => {
   const divWeather = document.createElement("div");
   divWeather.classList.add("weather__timeBlock__item__desc");
   let weather = document.createElement("p");
   weather.innerHTML = itemWeatherInfo;
   divWeather.append(weather);
   appendBlock.append(divWeather);
}

const showTemperature = (appendBlock, temperature) => {
   const divTemp = document.createElement("div");
   divTemp.classList.add("weather__timeBlock__item__temp");
   let temp = document.createElement("p");
   temp.innerHTML = temperature;
   divTemp.append(temp);
   appendBlock.append(divTemp);
}

const showFeels = (appendBlock, feelsLike) => {
   let divFeels = document.createElement("div");
   divFeels.classList.add("weather__timeBlock__item__feelsLike");
   divFeels.innerHTML = feelsLike;
   appendBlock.append(divFeels);
}

const showWindImage = (appendBlock, degrees) => {
   const divWindImg = document.createElement("div");
   divWindImg.classList.add("weather__timeBlock__item__windImg");
   let windImg = document.createElement("img");
   let windDeg = degrees;
   windImg.setAttribute("alt", "img");
   divWindImg.append(windImg);

   if (windDeg > 315 || windDeg < 45) {
      windImg.setAttribute("src", "./img/arrTop.png");
   } else if (windDeg > 45 && windDeg < 135) {
      windImg.setAttribute("src", "./img/arrRight.png");
   } else if (windDeg > 135 && windDeg < 225) {
      windImg.setAttribute("src", "./img/arrBottom.png");

   } else if (windDeg > 225 && windDeg < 315) {
      windImg.setAttribute("src", "./img/arrLeft.png");
   }

   appendBlock.append(divWindImg);
}

const showWind = (appendBlock, windInfo) => {
   let divWind = document.createElement("div");
   divWind.classList.add("weather__timeBlock__item__wind");
   let wind = document.createElement("p");
   wind.innerHTML = windInfo;
   divWind.append(wind);
   appendBlock.append(divWind);
}

const checkNigthTime = (nightTime) => {
   return nightTime === " 21:00" || nightTime === " 00:00" || nightTime === " 03:00" ? true : false;
}