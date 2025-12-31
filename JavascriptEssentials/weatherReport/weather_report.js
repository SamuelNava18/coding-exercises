// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
function showweatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const apiKey = '21a7216431376493c9f3d3ea35adf5c5'; // Reemplaza 'YOUR_API_KEY' con tu clave API real
    console.log(lat, lon);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Falló al obtener el clima. Por favor, inténtalo de nuevo.</p>`;
        });
}
// document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);