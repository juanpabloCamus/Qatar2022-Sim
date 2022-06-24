import React from 'react';
import './GroupsContainer.css';
import Group from './Group';
import { useDispatch } from 'react-redux';

function GroupsContainer() {
    const dispatch = useDispatch()

    function handleRestart(){
        window.location.reload()
    }

    return (
        <div className='groupsContainer'>
            <div className='subGroupsContainer'>
                <Group key='1' groupName='Group A' img={[{Qatar:'https://flagcdn.com/w320/qa.png',Ecuador:'https://flagcdn.com/w320/ec.png',Senegal:'https://flagcdn.com/w320/sn.png',Netherlands:'https://flagcdn.com/w320/nl.png'}]} countries={['Qatar', 'Ecuador', 'Senegal', 'Netherlands']}/>
                <Group key='2' groupName='Group B' img={[{
                    England:'https://flagpedia.net/data/flags/w580/gb-eng.png',
                    Iran:'https://flagpedia.net/data/flags/w580/ir.webp',
                    USA:'https://flagcdn.com/w320/us.png',
                    Wales:'https://flagpedia.net/data/flags/w580/gb-wls.webp'
                }]}
                countries={['England', 'Iran', 'USA', 'Wales']}/>
                <Group key='3' groupName='Group C' img={[{
                Argentina:'https://flagcdn.com/w320/ar.png',
                SaudiArabia:'https://flagcdn.com/w320/sa.png',
                Mexico:'https://flagcdn.com/w320/mx.png',
                Poland:'https://flagcdn.com/w320/pl.png',
                }]}
                countries={['Argentina', 'Saudi Arabia', 'Mexico', 'Poland']}/>
                <Group key='4' groupName='Group D' img={[{
                    France:'https://flagcdn.com/w320/fr.png',
                    Australia:'https://flagcdn.com/w320/au.png',
                    Denmark:'https://flagcdn.com/w320/dk.png',
                    Tunisia:'https://flagcdn.com/w320/tn.png',
                }]}
                countries={['France', 'Australia', 'Denmark', 'Tunisia']}/>
            </div>
            <div className='subGroupsContainer'>
                <Group key='5' groupName='Group E' img={[{
                    Spain:'https://flagpedia.net/data/flags/w580/es.webp',
                    CostaRica:'https://flagpedia.net/data/flags/w580/cr.webp',
                    Germany:'https://flagpedia.net/data/flags/w580/de.png',
                    Japan:'https://flagpedia.net/data/flags/w580/jp.webp',
                }]}
                countries={['Spain', 'Costa Rica', 'Germany', 'Japan']}/>
                <Group key='6' groupName='Group F' img={[{
                    Belgium:'https://flagpedia.net/data/flags/w580/be.png',
                    Canada:'https://flagpedia.net/data/flags/w580/ca.webp',
                    Morocco:'https://flagpedia.net/data/flags/w580/ma.webp',
                    Croatia:'https://flagpedia.net/data/flags/w580/hr.webp',
                }]}
                countries={['Belgium', 'Canada', 'Morocco', 'Croatia']}/>
                <Group key='7' groupName='Group G' img={[{
                    Brazil:'https://flagpedia.net/data/flags/w580/br.webp',
                    Serbia:'https://flagpedia.net/data/flags/w580/rs.webp',
                    Switzerland:'https://flagpedia.net/data/flags/w580/ch.png',
                    Cameroon:'https://flagpedia.net/data/flags/w580/cm.webp',
                }]}
                countries={['Brazil', 'Serbia', 'Switzerland', 'Cameroon']}/>
                <Group key='8' groupName='Group H' img={[{
                    Portugal:'https://flagpedia.net/data/flags/w580/pt.webp',
                    Ghana:'https://flagpedia.net/data/flags/w580/gh.webp',
                    Uruguay:'https://flagpedia.net/data/flags/w580/uy.webp',
                    KoreaRepublic:'https://flagpedia.net/data/flags/w580/kr.webp',
                }]} countries={['Portugal', 'Ghana', 'Uruguay', 'Korea Republic']}/>
            </div>
            <button onClick={handleRestart} id='restart'>Restart</button>
        </div>
    );
}

export default GroupsContainer;