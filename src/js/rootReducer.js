import { combineReducers } from 'redux';
import SearchBarReducer from '../components/SearchBar/searchBarReducer';
import WeatherDisplayReducer from '../components/WeatherDisplay/weatherDisplayReducer';
import SearchHistoryReducer from '../components/SearchHistory/searchHistoryReducer';

const rootReducer = combineReducers({
    searchBar: SearchBarReducer,
    searchHistory: SearchHistoryReducer,
    // weatherDisplay: WeatherDisplayReducer
});

export default rootReducer;
