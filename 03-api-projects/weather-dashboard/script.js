const apiKey = "a9efaa8e70f029e868a85bf9fd198f2a";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

async function getWeather(cityName){

    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod!="200"){

            alert("City Not Found");

            return;

        }

        city.innerText=data.name;

        temp.innerText=Math.round(data.main.temp)+"°C";

        condition.innerText=data.weather[0].main;

        humidity.innerText=data.main.humidity+"%";

        wind.innerText=data.wind.speed+" km/h";

    }

    catch(error){

        alert("Something went wrong.");

    }

}

searchBtn.addEventListener("click",()=>{

    const cityName=cityInput.value.trim();

    if(cityName===""){

        alert("Enter city name");

        return;

    }

    getWeather(cityName);

});