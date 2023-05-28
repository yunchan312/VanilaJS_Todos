const geoLocation = document.getElementById("#geolocation");

function handleGeo(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=42e3a9ceeb7a9e7f3d56743023ff438e&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = data.name;
      const todayWeather = data.weather[0].main;
      const country = data.sys.country;
      geolocation.innerText = `${city}(${country}), ${todayWeather}`;
    })
  );
}

function geoErr() {
  alert("no location");
}
navigator.geolocation.getCurrentPosition(handleGeo, geoErr);
