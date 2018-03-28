import React from 'react';

var noMargin = { 'marginBottom': '0px' };

class SearchHistory extends React.Component {
    render() {
        const items = this.props.searchItems;
        return(
        <div className='card border-primary mb-3'>
            <div className='card-header text-white bg-primary'>Search History</div>
            <div className='card-body'>
            <table className='table table-sm table-hover'>
                <thead>
                <tr>
                    <th>City</th>
                    <th style={ { width: 120 } }>Date</th>
                </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        return ( 
                            <tr key={item.time}>
                                <td>{item.city}</td>
                                <td><p style={noMargin}>{item.date}</p><p style={noMargin}>{item.time}</p></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>

        )
    }
}

export default SearchHistory;