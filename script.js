const inputBox = document.querySelector('#input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('#weather-img');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const humidity = document.getElementById('humidity1');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('#location-not-found');

const weather_body = document.querySelector('#weather-body');


async function checkWeather(city) {
    const api_key = "e97494051d72ecfef5ba6382e532b72c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity} %`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;

    }

    console.log(weather_data);
    // weather_body.innerHTML = `<h2> Loading... <h2>`
}


searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});


function time() {
    const displayTime = document.querySelector("#display-time");
    // Time
    function showTime() {
        let time = new Date();
        displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
        setTimeout(showTime, 1000);
    }

    showTime();
}

time();

var calculateTemp = () => {
    var numberTemp = document.querySelector("#temp").value;
    var tempSelector = document.querySelector("#convert");
    var valueTemp = convert.options[tempSelector.selectedIndex].value;
    console.log(valueTemp);

    var celToFeh = (cel) => {
        let fahrenheit = Math.round(((cel * 9 / 5) + 32));
        return fahrenheit;
    }

    var fehToCel = (feh) => {
        let celcius = Math.round(((feh - 32) * 5 / 9));
        return celcius;
    }

    let result;

    if (valueTemp == 'cel') {
        result = celToFeh(numberTemp);
        document.querySelector("#ans h1").innerHTML = `= ${result}°Fahrenheit `;
    } else {
        result = fehToCel(numberTemp);
        document.querySelector("#ans h1").innerHTML = `= ${result}°Celsius`;
    }
}

var nav_icon = document.querySelector(".ri-menu-line");
var nav = document.querySelector("#outer-nav");

var flag = 0;
nav_icon.addEventListener("click",()=>{
    if(flag == 0){
        nav.style.transform = "translateX(0%)";
        flag = 1;
    }else{
        nav.style.transform = "translateX(100%)";
        flag = 0;
    }
})

var cursor = document.querySelector("#cursor");
window.addEventListener("mousemove",(val)=>{
    cursor.style.left = `${val.clientX}px`;
    cursor.style.top = `${val.clientY}px`;
})