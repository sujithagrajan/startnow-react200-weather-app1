import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return {
        displayedCity: store.searchBar.displayedCity,
        selectedCity: store.searchBar.selectedCity,
        temperature: store.searchBar.temperature,
        pressure:store.searchBar.pressure,
        humidity: store.searchBar.humidity,
        lowTemp: store.searchBar.lowTemp,
        highTemp: store.searchBar.highTemp,
        windSpeed: store.searchBar.windSpeed,
        icon: store.searchBar.icon,
        lat: store.searchBar.lat,
        lon: store.searchBar.lon
    };
}

export default connect(mapStoreToProps)(SearchBar);