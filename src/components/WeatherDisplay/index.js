import { connect } from 'react-redux';
import WeatherDisplay from './WeatherDisplay';

function converKToF(k) {
    return (9/5)*(k - 273) + 32;
}

function mapStoreToProps(store) {
    let temp, lowT, highT;
    if (store.searchBar.temperature != '') {
        temp = converKToF(store.searchBar.temperature).toFixed(2);
        lowT = converKToF(store.searchBar.lowTemp).toFixed(2);
        highT = converKToF(store.searchBar.highTemp).toFixed(2);
    } else {
        temp = '';
        lowT = '';
        highT = '';
    }
    return {
        temperature: temp,
        pressure: store.searchBar.pressure,
        humidity: store.searchBar.humidity,
        lowTemp: lowT,
        highTemp: highT,
        windSpeed: store.searchBar.windSpeed,
        city: store.searchBar.displayedCity, 
        icon: store.searchBar.icon,
        lat: store.searchBar.lat,
        lon: store.searchBar.lon,
        error: store.searchBar.noResult,
        firstRender: store.searchBar.firstRender,
        pending: store.searchBar.pending
    };
}

export default connect(mapStoreToProps)(WeatherDisplay);