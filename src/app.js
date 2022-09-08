function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}
let apiKey = "6d01eef1b1c1dd92545f51cab940e040";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

function airpollutionElement(response) {
  console.log(response.list);
  let lat = response.city.coord.lat;
  let lon = response.city.coord.lon;
  let apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&appid=${apiKey}`;
  let airpollutionElement = document.querySelector("#air");
  airpollutionElement.innerHTML = response.list[main.aqi];
  axios.get(apiUrl).then(airpollutionElement);
}
