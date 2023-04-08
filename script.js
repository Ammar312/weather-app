window.currentWeather = function () {
  let cityName = document.querySelector("#cityInput").value;
  let myApi = "7a08a0e9f8541685c4151b60c35c2b50";
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApi}&units=metric`
    )
    .then(function (response) {
      let weatherIcon = response.data.weather[0].icon;
      // handle success
      document.querySelector(
        ".weatherIcon"
      ).innerHTML = `<img src= 'https://openweathermap.org/img/wn/${weatherIcon}@2x.png'/>`;
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error.data);
    });
};
