window.currentWeather = function () {
  let cityName = document.querySelector("#cityInput").value;
  let myApi = "7a08a0e9f8541685c4151b60c35c2b50";
  const weatherIcon = document.querySelector(".conditionImg");
  // Recieving weather data through api
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApi}&units=metric`
    )
    .then(function (response) {
      if (console.log(response.status === 404)) {
        document.querySelector(".welcomeAnderror").innerHTML = "Invalid Input";
      } else {
        const weatherCondition = response.data.weather[0].main;
        const openWeatherIconCode = response.data.weather[0].icon;
        const openWeatherIcon = `<img src="https://openweathermap.org/img/wn/${openWeatherIconCode}@2x.png"/>`;
        const word = response.data.weather[0].description;
        // Capitilize first letter of description
        const firstLetter = word.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase();
        const remainingLetters = word.slice(1);
        const capitalizedWord = firstLetterCap + remainingLetters;
        // Sending data to HTML
        document.querySelector(".description").innerHTML = `${capitalizedWord}`;
        document.querySelector("#openWeatherIcon").innerHTML = openWeatherIcon;
        document.querySelector(".feelsLike").innerHTML =
          "Feels like " + Math.round(response.data.main.feels_like) + "°";
        document.querySelector(".temperature").innerHTML =
          Math.round(response.data.main.temp) + "°C";
        document.querySelector(".cityName").innerHTML = response.data.name;
        document.querySelector("#humidityPercent").innerHTML =
          response.data.main.humidity + "%";
        document.querySelector("#windPercent").innerHTML =
          response.data.wind.speed + " km/h";
        // Changing weather images dynamically
        if (weatherCondition === "Clear") {
          weatherIcon.src = "images/clear.png";
        } else if (weatherCondition === "Clouds") {
          weatherIcon.src = "images/clouds.png";
        } else if (weatherCondition === "Drizzle") {
          weatherIcon.src = "images/drizzle.png";
        } else if (weatherCondition === "Mist" || "Haze") {
          weatherIcon.src = "images/mist.png";
        } else if (weatherCondition === "Fog") {
          weatherIcon.src = "images/fog.png";
        } else if (weatherCondition === "Thunderstorm") {
          weatherIcon.src = "images/storm.png";
        } else if (weatherCondition === "Dust" || "Smoke" || "Sand") {
          weatherIcon.src = "images/humidity.png";
        } else if (weatherCondition === "Rain") {
          weatherIcon.src = "images/rain.png";
        } else if (weatherCondition === "Snow") {
          weatherIcon.src = "images/snow.png";
        } else {
          console.log("error hai");
        }
        // Display weather content
        document.querySelector(".weatherContent").style.display = "block";
        // Hidden welcome and error display
        document.querySelector(".welcomeAnderror").style.display = "none";
        // Changing body background color
        document.querySelector("body").style.background =
          "linear-gradient(to right bottom, #00b4db, #0083b0)";
        console.log(response.data);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error.data);
    });
};
