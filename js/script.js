// 60d465ff898de72b202b35030315ce9d     Api Key

// global Info
const weatherBlockItem = document.querySelectorAll(".weather__timeBlock__article");



// Location
let BrowserLocation = window.location.href;
let partLocation = BrowserLocation.substring(BrowserLocation.length - 12);
let isMainPage = partLocation.includes("index.html") || partLocation.includes("ther_Site/");
let isDnipro = partLocation.includes("dnipro.html");
let isNikopol = partLocation.includes("ikopol.html");
let isAalsmeer = partLocation.includes("lsmeer.html");

// set Current Date
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currDay = document.querySelector(".date-day");
let currDate = document.querySelector(".date-num");
let curDay = new Date(Date.now());

const transformDate = (index) => {
   return week[index];
}
// if (isMainPage) {
currDay.innerHTML = transformDate(curDay.getDay());
currDate.innerHTML = `${curDay.getDate()}.${curDay.getMonth() + 1}.${curDay.getFullYear()}`;
// }
// if (isDnipro) {
//    currDay.innerHTML = transformDate(curDay.getDay());
//    currDate.innerHTML = `${curDay.getDate()}.${curDay.getMonth() + 1}.${curDay.getFullYear()}`;
// }
// if (nextCity) {}


// API request`s

// currentDnipro
async function getCurrentWetherDnipro() {
   let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.45&lon=35.04&appid=60d465ff898de72b202b35030315ce9d');

   let list = await promise.json();
   let sity = list.name;
   let temp = normalizeTemp(list.main.temp);
   let humidity = list.main.humidity;
   let weather = list.weather[0];
   let mainDesc = weather.main;
   let windSpeed = list.wind.speed;
   let curWeatherDp = document.querySelector(".info-cloud_dp");



   // Index
   if (isMainPage) {
      const cityNameDP = document.querySelector(".weather__city__name-name_dp");
      const curTempDP = document.querySelector(".weather__city__info-temp_dp");
      const IndexBlockImgDP = document.querySelector(".weather__city__info-img_dp");

      cityNameDP.innerHTML = `${sity}, Ukraine`;
      curTempDP.innerHTML = `${temp}°`;
      curWeatherDp.innerHTML = mainDesc;
      showCurrentImg(IndexBlockImgDP, mainDesc);
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
      curWeatherDp.innerHTML = mainDesc;
      windDnipro.innerHTML = `${windSpeed.toFixed(1)} km/h`;
      itemAddInfo.classList.add("item__add__info");
      itemAddInfo.innerHTML = weather.description;

      weatherDate.append(itemAddInfo);
      showCurrentImg(imgBlockDnipro, mainDesc);

   }

}
getCurrentWetherDnipro();

// currentNikopol
async function getCurrentWetherNikopol() {
   let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.5692&lon=34.3917&appid=60d465ff898de72b202b35030315ce9d');

   let list = await promise.json();
   let sity = list.name;
   let temp = normalizeTemp(list.main.temp);
   let humidity = list.main.humidity;
   let weather = list.weather[0];
   let mainDesc = weather.main;
   let windSpeed = list.wind.speed;
   let curWeatherNk = document.querySelector(".info-cloud_nk");


   // Index
   if (isMainPage) {
      const cityNameNK = document.querySelector(".weather__city__name-name_nk");
      const curTempNK = document.querySelector(".weather__city__info-temp_nk");
      const IndexBlockImgNK = document.querySelector(".weather__city__info-img_nk");

      cityNameNK.innerHTML = `${sity}, Ukraine`;
      curTempNK.innerHTML = `${temp}°`;
      curWeatherNk.innerHTML = mainDesc;
      showCurrentImg(IndexBlockImgNK, mainDesc);
   }
   // Nikopol
   if (isNikopol) {

      const curNKTemp = document.querySelector(".dnipro__temp");
      const cityNKName = document.querySelector(".city-name");
      const humidityNK = document.querySelector(".info__humidityNK");
      const windNK = document.querySelector(".info__wind");
      const imgBlockNK = document.querySelector(".weather__img");
      const weatherDate = document.querySelector(".weather__date");
      const itemAddInfo = document.createElement("div");

      cityNKName.innerHTML = `${sity}, Ukraine`;
      curNKTemp.innerHTML = `${temp}°`;
      humidityNK.innerHTML = `${humidity}%`;
      curWeatherNk.innerHTML = mainDesc;
      windNK.innerHTML = `${windSpeed.toFixed(1)} km/h`;
      itemAddInfo.classList.add("item__add__info");
      itemAddInfo.innerHTML = weather.description;

      weatherDate.append(itemAddInfo);
      showCurrentImg(imgBlockNK, mainDesc);

   }



}
getCurrentWetherNikopol();

// currentAalsmeer
async function getCurrentWetherAalsmeer() {
   let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=52.2669&lon=4.7493&appid=60d465ff898de72b202b35030315ce9d');

   let list = await promise.json();
   let sity = list.name;
   let temp = normalizeTemp(list.main.temp);
   let humidity = list.main.humidity;
   let weather = list.weather[0];
   let mainDesc = weather.main;
   let windSpeed = list.wind.speed;
   let curWeatherAm = document.querySelector(".info-cloud_am");


   // Index
   if (isMainPage) {
      const cityNameAm = document.querySelector(".weather__city__name-name_am");
      const curTempAm = document.querySelector(".weather__city__info-temp_am");
      const IndexBlockImgAm = document.querySelector(".weather__city__info-img_am");


      cityNameAm.innerHTML = `Aalsmeer, Netherlands`;
      curTempAm.innerHTML = `${temp}°`;
      curWeatherAm.innerHTML = mainDesc;
      showCurrentImg(IndexBlockImgAm, mainDesc);
   }

   // Aalsmeer
   if (isAalsmeer) {

      const curAalsmeerTemp = document.querySelector(".dnipro__temp");
      const cityAalsmeerName = document.querySelector(".city-name");
      const humidityAalsmeer = document.querySelector(".info__humidity");
      const windAalsmeer = document.querySelector(".info__wind");
      const imgBlockAalsmeer = document.querySelector(".weather__img");
      const weatherDate = document.querySelector(".weather__date");
      const itemAddInfo = document.createElement("div");

      cityAalsmeerName.innerHTML = `Aalsmeer, Netherlands`;
      console.log(cityAalsmeerName)
      curAalsmeerTemp.innerHTML = `${temp}°`;
      humidityAalsmeer.innerHTML = `${humidity}%`;
      curWeatherAm.innerHTML = mainDesc;
      windAalsmeer.innerHTML = `${windSpeed.toFixed(1)} km/h`;
      itemAddInfo.classList.add("item__add__info");
      itemAddInfo.innerHTML = weather.description;

      weatherDate.append(itemAddInfo);
      showCurrentImg(imgBlockAalsmeer, mainDesc);

   }

}
getCurrentWetherAalsmeer();


// get Forecast Dnipro
async function getForecastDnipro() {

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
getForecastDnipro();

// Forecast Nikopol
async function getForecastNikopol() {

   let promise = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=47.5692&lon=34.3917&appid=60d465ff898de72b202b35030315ce9d');

   if (promise.ok) {
      let list = await promise.json();
      let array = list.list;

      for (let i = 0; i < 5; i++) {
         // Nikopol
         if (isNikopol) {

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
getForecastNikopol();

// Forecast Aalsmeer
async function getForecastAalsmeer() {

   let promise = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=52.2669&lon=4.7493&appid=60d465ff898de72b202b35030315ce9d');

   if (promise.ok) {
      let list = await promise.json();
      let array = list.list;

      for (let i = 0; i < 5; i++) {
         // Aalsmeer
         if (isAalsmeer) {

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
getForecastAalsmeer();


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
   } else if (weatherInfo == "Rain") {
      imgCurImg.setAttribute("src", "img/weatheriCO/rain.png");
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
      case "Rain":
         imga.setAttribute("src", "img/weatheriCO/rain.png");
         break;
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



// get Sity lat and lon ( if need )
/*
async function getID() {
   let promise = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Kyiv&limit=5&appid=60d465ff898de72b202b35030315ce9d');
   let list = await promise.json();
}
getID();
*/
// kyiv lat: 47.8671228, lon: 31.0179572;
