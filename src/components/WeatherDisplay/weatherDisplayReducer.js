import { types } from './weatherDisplayActions';

const defaultState = {
    temperature: '',
    pressure: '',
    humidity: '',
    lowTemp: '',
    highTemp: '',
    windSpeed: '',
    icon: '',
    city: '',
    lat: '',
    lon: ''
};

function converKToF(k) {
    return (9/5)*(k - 273) + 32;
}

export default function WeatherDisplayReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.UPDATE_WEATHER_INFO): {
            return {
                ...state,
                temperature: converKToF(payload.main.temp),
                pressure: payload.main.pressure,
                humidity: payload.main.humidity,
                lowTemp: convertKToF(payload.main.lowTemp),
                highTemp: converKToF(payload.main.highTemp),
                windSpeed: payload.wind.speed,
                icon: payload.weather[0].icon,
                lat: payload.coord.lat,
                lon: payload.coord.lon
            };
        }

        default: {
            return state;
        }
    }
}