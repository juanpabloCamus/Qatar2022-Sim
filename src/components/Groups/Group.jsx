import React from 'react';
import './Group.css';
import flag from '../../assets/flag.png'

function Group( {gnum, countries} ) {
    return (
        <div className='groupContainer'>
            <h2 className='groupName'>{gnum}</h2>
            <div className='CountriesContainer'>
                {countries.map(c => (
                    <div key={c} className='CountryContainer'>
                        <img src={flag} alt='flag' className='flag'></img>
                        <label>{c}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Group;