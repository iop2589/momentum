const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "4124fcd17ceef2d21cb97b7c60988f3a";

function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const apiCallUrl = `${apiUrl}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(apiCallUrl)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
    });
}

function onGeoError() {
    alert("사용자 위치 정보를 찾을 수 없습니다. 날씨 정보를 제공하지 않습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);