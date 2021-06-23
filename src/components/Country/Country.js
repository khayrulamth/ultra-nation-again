import React from 'react';
import './Country.css'

const Country = (props) => {
    const{name,capital,flag,population,area} = props.country;

    const flagStyle = {height: '200px',
width: '400px'};

    return (
        <div className='country-container'>
            <div className='flag'>
                <img style={flagStyle} src={flag} alt=""  />
            </div>
            <div className='details'>
                <h3>Name: {name}</h3>
                <p>Capital: {capital}</p>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <button onClick={()=>props.handleAddCountry(props.country)}>Add Country</button>
            </div>
            
        </div>
    );
};

export default Country;