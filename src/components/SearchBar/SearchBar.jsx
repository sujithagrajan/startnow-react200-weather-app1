import React from 'react';
import {
    getWeather,
    updateCity
} from './searchBarActions';
import { updateWeatherInfo } from '../WeatherDisplay/weatherDisplayActions';
import { addNewSearchItem } from '../SearchHistory/searchHistoryActions';

var padding = {'paddingBottom': '15px'};

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePremadeClick = this.handlePremadeClick.bind(this);
    }

    handleClick(event) {
        const { dispatch, selectedCity } = this.props;
        // dispatch(updateWeatherInfo());
        dispatch(getWeather(selectedCity));
        dispatch(addNewSearchItem(selectedCity));
    }

    handlePremadeClick(event) {
        const { dispatch } = this.props;
        dispatch(getWeather(event.target.value));
        dispatch(addNewSearchItem(event.target.value));
    }

    handleInputChange(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCity(value));
    }

    render() {
        const selectedCity = this.props.selectedCity;
        return (
            <div>
                <button onClick={ this.handlePremadeClick } value='San Diego' className='btn btn-secondary'>San Diego</button>
                <button onClick={ this.handlePremadeClick } value='Tokyo' className='btn btn-secondary'>Tokyo</button>
                <button onClick={ this.handlePremadeClick } value='Los Angeles' className='btn btn-secondary'>Los Angeles</button>
                <button onClick={ this.handlePremadeClick } value='Seattle' className='btn btn-secondary'>Seattle</button>
                <button onClick={ this.handlePremadeClick } value='New York' className='btn btn-secondary'>New York</button>
                <div style={padding} className='input-group'>
                    <input id='city' onChange={ this.handleInputChange } value={ selectedCity } className='form-control' type='text' placeholder='Enter a City' />
                    <span className='input-group-btn'>
                        <button onClick={ this.handleClick } className='btn btn-secondary'>Go!</button>
                    </span>
                </div>
            </div>
        )
    }
}
