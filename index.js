import { elements } from "./app.js";

const init = () => {
    elements.searchBarContainer.addEventListener('click', ({ target }) => handleClick(target));

    const handleClick = target => {
        if (target === elements.searchBtn) {
            getWeatherBySearchLocation();
        }
        else if (target === elements.targetLocationIcon) {
            getWeatherBySearchCurrentLocation();
        }
    }

    const getWeatherBySearchLocation = () => {
        const location = elements.searchInput.value;
    }

    const getWeatherBySearchCurrentLocation = () => {
        if(window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(position => console.log(position));
        }
    }
}

window.addEventListener('DOMContentLoaded', () => init());