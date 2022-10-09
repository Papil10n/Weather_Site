// 60d465ff898de72b202b35030315ce9d     Api Key
let cityName = document.querySelector(".weather__city__name-name");
let curTemp = document.querySelector(".weather__city__info-temp");
let curWeather = document.querySelector(".info-cloud");

let curDniproTemp = document.querySelector(".dnipro__temp");
let cityDniproName = document.querySelector(".city-name");
let humidityDnipro = document.querySelector(".info__humidity");
let windDnipro = document.querySelector(".info__wind");




// index.html
let locati = window.location.href;
let local = locati.substring(locati.length - 12);
console.log(local);

// set Current Date
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currDay = document.querySelector(".date-day");
let currDate = document.querySelector(".date-num");
let curDay = new Date(Date.now());

const transformDate = (index) => {
   return week[index];
}

if (local.includes("index.html")) {
   currDay.innerHTML = transformDate(curDay.getDay());
   currDate.innerHTML = `${curDay.getDate()}.${curDay.getMonth() + 1}.${curDay.getFullYear()}`;
} else if (local.includes("dnipro.html")) {
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
   if (local.includes("index.html")) { cityName.innerHTML = `${sity}, Ukraine` }
   if (local.includes("dnipro.html")) { cityDniproName.innerHTML = `${sity}, Ukraine` }


   let temp = normalizeTemp(list.main.temp);
   if (local.includes("index.html")) { curTemp.innerHTML = `${temp}°` }
   if (local.includes("dnipro.html")) { curDniproTemp.innerHTML = `${temp}°` }

   let feelsLike = normalizeTemp(list.main.feels_like);

   let maxTemp = normalizeTemp(list.main.temp_max);

   let minTemp = normalizeTemp(list.main.temp_min);

   let humidity = list.main.humidity;
   if (local.includes("index.html")) { curWeather.innerHTML = mainDesc }
   if (local.includes("dnipro.html")) { humidityDnipro.innerHTML = `${humidity}%` }

   // 
   let weather = list.weather[0];

   let mainDesc = weather.main;
   if (local.includes("index.html")) { curWeather.innerHTML = mainDesc }
   if (local.includes("dnipro.html")) { curWeather.innerHTML = mainDesc }
   // if main == {change img}

   let description = weather.description;

   let windSpeed = list.wind.speed;
   let windDeg = list.wind.deg;
   if (local.includes("dnipro.html")) { windDnipro.innerHTML = `${windSpeed.toFixed(1)} km/h` }


}
getCurrentWether();



async function getForecastWeather() {
   let promise = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=48.46&lon=35.04&appid=60d465ff898de72b202b35030315ce9d');
   if (promise.ok) {
      let list = await promise.json();
      console.log(list);




   } else {
      console.log("Ошибка HTTP: " + response.status);
   }
}
getForecastWeather();

/* How to transform epoch
let date = new Date(1665287409 * 1000);
console.log(date)
*/










// get Sity lat and lon
async function getID() {
   let promise = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Dnipro&limit=5&appid=60d465ff898de72b202b35030315ce9d');
   let list = await promise.json();

   console.log(list);
}




const normalizeTemp = (temp) => {
   return (temp - 273.15).toFixed(0);
}






