const temperature = document.getElementById("temp");
const weatherDescription = document.getElementById("des");
const pressure = document.getElementById("press");
const humidity = document.getElementById("hum");
const search = document.getElementById("search");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const image = document.getElementById("img");
const city = document.getElementById("loc");
let cityName;

button.onclick = function() {
    cityName = search.value.trim().toLowerCase();
    weather();
}

async function weather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=13c3ab45b62b253573b4e145c420c932&units=metric`
  const res = await fetch(url);
  const data = await res.json();
 temperature.innerText = `${data.main.temp}⁰C`;
  weatherDescription.innerText = data.weather[0].description;
  let imgSource = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  image.src = imgSource;
  pressure.innerText = `${data.main.pressure}⁰F`;
  humidity.innerText = data.main.humidity;
  city.innerText = cityName.toUpperCase();
  result.style.display = "block";
  search.value = "";
}
