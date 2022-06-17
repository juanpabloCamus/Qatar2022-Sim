import React from 'react';
import './GroupsContainer.css';
import Group from './Group';

function GroupsContainer() {
    return (
        <div className='groupsContainer'>
            <div className='subGroupsContainer'>
                <Group key='1' gnum='Group A' countries={['Qatar', 'Ecuador', 'Senegal', 'Netherlands']}/>
                <Group key='2' gnum='Group B' countries={['England', 'Iran', 'USA', 'Wales']}/>
                <Group key='3' gnum='Group C' countries={['Argentina', 'Saudi Arabia', 'Mexico', 'Poland']}/>
                <Group key='4' gnum='Group D' countries={['France', 'Australia', 'Denmark', 'Tunisia']}/>
            </div>
            <div className='subGroupsContainer'>
                <Group key='5' gnum='Group E' countries={['Spain', 'Costa Rica', 'Germany', 'Japan']}/>
                <Group key='6' gnum='Group F' countries={['Belgium', 'Canada', 'Morocco', 'Croatia']}/>
                <Group key='7' gnum='Group G' countries={['Brazil', 'Serbia', 'Switzerland', 'Cameroon']}/>
                <Group key='8' gnum='Group H' countries={['Portugal', 'Ghana', 'Uruguay', 'Korea Republic']}/>
            </div>
        </div>
    );
}

export default GroupsContainer;