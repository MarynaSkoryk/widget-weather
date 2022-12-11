'use strict';

const weatherBlock = document.querySelector('#weather');

async function loadWeather(e) {
  weatherBlock.innerHTML = `<div class="weather__loading"><img src="./images/loading.gif" alt="Loading..."></div>`;
}

if (weatherBlock) {
  loadWeather();
}
