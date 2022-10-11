// 60d465ff898de72b202b35030315ce9d     Api Key
let cityName = document.querySelector(".weather__city__name-name");
let curTemp = document.querySelector(".weather__city__info-temp");
let curWeather = document.querySelector(".info-cloud");

let curDniproTemp = document.querySelector(".dnipro__temp");
let cityDniproName = document.querySelector(".city-name");
let humidityDnipro = document.querySelector(".info__humidity");
let windDnipro = document.querySelector(".info__wind");

let weatherBlockItem = document.querySelectorAll(".weather__timeBlock__article");


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




// API request
async function getCurrentWether() {
   let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.45&lon=35.04&appid=60d465ff898de72b202b35030315ce9d');
   let list = await promise.json();
   console.log(list);

   let country = list.sys.country;
   let sity = list.name;
   let temp = normalizeTemp(list.main.temp);
   let feelsLike = normalizeTemp(list.main.feels_like);
   let maxTemp = normalizeTemp(list.main.temp_max);
   let minTemp = normalizeTemp(list.main.temp_min);
   let humidity = list.main.humidity;
   let weather = list.weather[0];
   let mainDesc = weather.main;
   let description = weather.description;
   let windSpeed = list.wind.speed;
   let windDeg = list.wind.deg;

   let weatherDate = document.querySelector(".weather__date");
   let itemAddInfo = document.createElement("div");
   itemAddInfo.classList.add("item__add__info");
   itemAddInfo.innerHTML = weather.description;
   weatherDate.append(itemAddInfo);

   // Index
   if (isMainPage) {
      cityName.innerHTML = `${sity}, Ukraine`;
      curTemp.innerHTML = `${temp}°`;
      curWeather.innerHTML = mainDesc;
      curWeather.innerHTML = mainDesc;
   }
   // Dnipro
   if (isDnipro) {
      cityDniproName.innerHTML = `${sity}, Ukraine`;
      curDniproTemp.innerHTML = `${temp}°`;
      humidityDnipro.innerHTML = `${humidity}%`;
      curWeather.innerHTML = mainDesc;
      windDnipro.innerHTML = `${windSpeed.toFixed(1)} km/h`;

      // Buttons "day"
      let day1 = document.querySelector(".day_1").innerHTML = transformDate(curDay.getDay() + 1);
      let day2 = document.querySelector(".day_2").innerHTML = transformDate(curDay.getDay() + 2);
      let day3 = document.querySelector(".day_3").innerHTML = transformDate(curDay.getDay() + 3);
      let day4 = document.querySelector(".day_4").innerHTML = transformDate(curDay.getDay() + 4);
   }

}
getCurrentWether();





// get Day Forecast
async function getForecastWeather() {
   let promise = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=48.46&lon=35.04&appid=60d465ff898de72b202b35030315ce9d');
   if (promise.ok) {
      let list = await promise.json();

      let array = list.list;
      for (let i = 0; i < 8; i++) {

         if (isDnipro) {
            let itemTime = (array[i].dt_txt).slice(10, array[i].dt_txt.length - 3);
            let itemWeather = array[i].weather[0].main;
            let itemTemp = (array[i].main.temp - 273.15).toFixed(0) + "°";
            let itemFeels = "ощущ. как: " + (array[i].main.feels_like - 273.15).toFixed(0) + "°";
            let itemWind = "ветер: " + array[i].wind.speed.toFixed(1) + " км/ч";

            // create elem
            let newBlockItem = document.createElement("div");
            newBlockItem.classList.add("weather__timeBlock__item");

            // create time
            let divTime = document.createElement("div");
            divTime.classList.add("weather__timeBlock__item__time");
            let time = document.createElement("div");
            time.classList.add("time");
            divTime.append(time);
            time.innerHTML = itemTime;

            // create img 
            let divImg = document.createElement("div");
            divImg.classList.add("weather__timeBlock__item__img");
            let imga = document.createElement("img");
            imga.setAttribute("src", "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png");
            imga.setAttribute("alt", "img");
            divImg.append(imga);

            // create weather
            let divWeather = document.createElement("div");
            divWeather.classList.add("weather__timeBlock__item__desc");
            let weather = document.createElement("p");
            weather.innerHTML = itemWeather;
            divWeather.append(weather);

            // create temp
            let divTemp = document.createElement("div");
            divTemp.classList.add("weather__timeBlock__item__temp");
            let temp = document.createElement("p");
            temp.innerHTML = itemTemp;
            divTemp.append(temp);

            // feels like 
            let divFeels = document.createElement("div");
            divFeels.classList.add("weather__timeBlock__item__feelsLike");
            divFeels.innerHTML = itemFeels;

            // wind img
            let divWindImg = document.createElement("div");
            divWindImg.classList.add("weather__timeBlock__item__windImg");
            let windImg = document.createElement("img");
            windImg.setAttribute("src", "./../img/Arrow 1.png");
            windImg.setAttribute("alt", "img");
            divWindImg.append(windImg);

            // wind
            let divWind = document.createElement("div");
            divWind.classList.add("weather__timeBlock__item__wind");
            let wind = document.createElement("p");
            wind.innerHTML = itemWind;
            divWind.append(wind);

            // add to newBlock
            newBlockItem.append(divTime);
            newBlockItem.append(divImg);
            newBlockItem.append(divWeather);
            newBlockItem.append(divTemp);
            newBlockItem.append(divFeels);
            newBlockItem.append(divWindImg);
            newBlockItem.append(divWind);

            let fixTime = array[i].dt_txt.slice(11, array[i].dt_txt.length - 6)
            if (itemTime.includes("09")) {
               weatherBlockItem[0].append(newBlockItem);
            }
            if (itemTime.includes("12")) {
               weatherBlockItem[1].append(newBlockItem);
            }
            if (itemTime.includes("15")) {
               weatherBlockItem[2].append(newBlockItem);
            }
            if (itemTime.includes("18")) {
               weatherBlockItem[3].append(newBlockItem);
            }
            if (itemTime.includes("21")) {
               weatherBlockItem[4].append(newBlockItem);
            }
         }

      }


   } else {
      console.log("Ошибка HTTP: " + response.status);
   }
}
getForecastWeather();





// get Sity lat and lon
async function getID() {
   let promise = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Dnipro&limit=5&appid=60d465ff898de72b202b35030315ce9d');
   let list = await promise.json();

   // console.log(list);
}




const normalizeTemp = (temp) => {
   return (temp - 273.15).toFixed(0);
}






