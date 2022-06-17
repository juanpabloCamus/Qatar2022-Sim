import React from 'react';
import './Group.css';

function Group( {gnum, countries} ) {
    return (
        <div>
            {gnum}
            <div className='CountriesContainer'>
                {countries.map(c => (
                    <div className='CountryContainer'>
                        <label>{c}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Group;