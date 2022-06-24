import React, { useEffect, useState } from 'react';
import './Group.css';
import flag from '../../assets/flag.png'
import { useDispatch } from 'react-redux';
import { addCountriesGroup } from '../../redux/actions';

function Group( {groupName, countries, img} ) {

    const dispatch = useDispatch()

    const [position, setPosition] = useState({
        group:groupName,
        first:'',
        second:''
    })

    useEffect(()=>{
        dispatch(addCountriesGroup(position))
    },[dispatch,position])
    
    function handlePosition(e){
        let selectedCountry = e.target.alt === undefined ? e.target.outerText : e.target.alt
        
        if (selectedCountry === '1' || selectedCountry === '2') return

        if (position.first === selectedCountry) {
            setPosition({...position, first:''})
            return
        }

        if (position.second === selectedCountry) {
            setPosition({...position, second:''})
            return
        }

        if(position.first === '') {
            setPosition({...position, first: selectedCountry})
            return
        }
        else {
            setPosition({...position, second: selectedCountry})
            return
        }
        
    }
    
    return (
        <div className='groupContainer'>
            <h2 className='groupName'>{groupName}</h2>
            <div className='CountriesContainer'>
                {countries.map(c => (
                    <div value={c} key={c} className='CountryContainer' onClick={handlePosition}>
                        <img src={
                            c === 'Saudi Arabia' ? img[0].SaudiArabia :
                            c === 'Costa Rica' ? img[0].CostaRica :
                            c === 'Korea Republic' ? img[0].KoreaRepublic :
                            img[0][c] 
                        } alt={c} className='flag'></img>
                        <label>{c}</label>
                        {position.first === c ? <h6>1</h6> : null}
                        {position.second === c ? <h6>2</h6> : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Group;