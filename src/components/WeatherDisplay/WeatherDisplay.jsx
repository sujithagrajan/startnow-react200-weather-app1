import React from 'react';

var whiteBorder = {borderColor: 'white'};
var greenText = {color: 'green'};
var padding = {'paddingBottom': '40px'};

export default class WeatherDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { city, icon, lat='', lon='', temperature, pressure, humidity, lowTemp, highTemp, windSpeed, error, firstRender, pending } = this.props;
        let snippet;
        if (firstRender && !pending) {
            snippet = 
            <div className='card border-primary mb-3'>
                <div className='card-header text-white bg-primary'>WELCOME</div>
                <div className='card-body'>
                    <div className='row'>
                    <div className='col-12 col-md-12'>
                        <div style={whiteBorder} className='card card-outline-default text-center'>
                            <h2 className='card-title'>Please select a city button or insert a city in the box and press Go!</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>;
        } else if (error) {
            snippet = 
                <div className='card border-primary mb-3'>
                    <div className='card-header text-white bg-primary'>City Information</div>
                    <div className='card-body'>
                        <div className='row'>
                        <div className='col-12 col-md-12'>
                            <div style={whiteBorder} className='card card-outline-default text-center'>
                                <h2 className='card-title'>No Weather Data to Display</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>;
        } else if (pending) {
            snippet = 
            <div className='card border-primary mb-3'>
                <div className='card-header text-white bg-primary'>Pending...</div>
            </div>;
        } else {
            snippet = 
            <div className='card border-primary mb-3'>
                <div className='card-header text-white bg-primary'>City Information</div>
                <div className='card-body'>
                <div className='row'>
                    <div className='col-12 col-md-12'>
                        <div style={whiteBorder} className='card card-outline-default text-center'>
                            <h2 className='card-title'><img src={'http://openweathermap.org/img/w/' + icon + '.png'}/>{ city }</h2>
                            <p className='card-text'><small>{ `Lat:  ${lat}, Lon: ${lon}`}</small></p>
                        </div>
                        <hr />
                        <div style={padding} className='row'>
                            <div className='col-md-4'>
                                <div style={whiteBorder} className='card card-outline-default text-center'>
                                    <h6 className='card-title'>Temperature (F)</h6>
                                    <h5 style={greenText} className='card-text'>{ temperature }</h5>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div style={whiteBorder} className='card card-outline-default text-center'>
                                    <h6 className='card-title'>Pressure (mbar)</h6>
                                    <h5 style={greenText} className='card-text'>{ pressure }</h5>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div style={whiteBorder} className='card card-outline-default text-center'>
                                    <h6 className='card-title'>Humidity (%)</h6>
                                    <h5 style={greenText} className='card-text'>{ humidity }</h5>
                                </div>
                            </div>
                        </div>
                        <div style={ {'paddingBottom': '15px'}} className='row'>
                            <div className='col-md-4'>
                                <div style={whiteBorder} className='card card-outline-default text-center'>
                                    <h6 className='card-title'>Lowest Temp (F)</h6>
                                    <h5 style={greenText} className='card-text'>{ lowTemp }</h5>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div style={whiteBorder} className='card card-outline-default text-center'>
                                    <h6 className='card-title'>Highest Temp (F)</h6>
                                    <h5 style={greenText} className='card-text'>{ highTemp }</h5>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div style={whiteBorder} className='card card-outline-default text-center'>
                                    <h6 className='card-title'>Wind Speed (mph)</h6>
                                    <h5 style={greenText} className='card-text'>{ windSpeed }</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        }
        return(
            snippet
        )
    }
}
