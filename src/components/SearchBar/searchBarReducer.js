import { types } from './searchBarActions';

const defaultState = {
    temperature: '',
    pressure: '',
    humidity: '',
    lowTemp: '',
    highTemp: '',
    windSpeed: '',
    icon: '',
    selectedCity: '',
    displayedCity: '',
    lat: '',
    lon: '',
    noResult: false,
    firstRender: true,
    pending: false
};

export default function SearchBarReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case ('GET_WEATHER_FULFILLED'): {
            if (payload) {
                return {
                    ...state,
                    temperature: payload.main.temp,
                    pressure: payload.main.pressure,
                    humidity: payload.main.humidity,
                    lowTemp: payload.main.temp_min,
                    highTemp: payload.main.temp_max,
                    windSpeed: payload.wind.speed,
                    icon: payload.weather[0].icon,
                    lat: payload.coord.lat,
                    lon: payload.coord.lon,
                    displayedCity: payload.name,
                    selectedCity: '',
                    noResult: false,
                    firstRender: false,
                    pending: false
                };
            } else {
                return {
                    ...state,
                    noResult: true,
                    selectedCity: ''
                }
            }
            
            break;
        }

        case (types.GET_WEATHER + '_REJECTED'): {
            return {
                ...state,
                noResult: true,
                pending: false,
                selectedCity: ''
            };
            break;
        }

        case (types.GET_WEATHER + '_PENDING'): {
            return {
                ...state,
                pending: true
            };
            break;
        }

        case types.UPDATE_CITY: {
            return {
                ...state,
                selectedCity: payload.city
            }
            break;
        }

        default: {
            return state;
        }
    }
}