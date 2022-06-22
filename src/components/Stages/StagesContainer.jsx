import React from 'react';
import './StagesContainer.css';
import { Bracket, RoundProps, Seed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';


function StagesContainer() {

    const rounds = [
        {
        title: 'Round of 16',
        seeds: [
            {
            id: 1,
            date: new Date().toDateString(),
            teams: [{ name: 'A1' }, { name: 'B2' }],
            },
            {
            id: 2,
            date: new Date().toDateString(),
            teams: [{ name: 'C1' }, { name: 'D2' }],
            },
            {
            id: 3,
            date: new Date().toDateString(),
            teams: [{ name: 'E1' }, { name: 'F2' }],
            },
            {
                id: 4,
                date: new Date().toDateString(),
                teams: [{ name: 'G1' }, { name: 'H2' }],
            },
            {
                id: 5,
                date: new Date().toDateString(),
                teams: [{ name: 'A2' }, { name: 'B1' }],
            },
            {
                id: 6,
                date: new Date().toDateString(),
                teams: [{ name: 'C2' }, { name: 'D1' }],
            },
            {
                id: 7,
                date: new Date().toDateString(),
                teams: [{ name: 'E2' }, { name: 'F1' }],
            },
            {
                id: 8,
                date: new Date().toDateString(),
                teams: [{ name: 'G2' }, { name: 'H1' }],
            },
            
        ],
        },
        {
        title: 'Quarter finals',
        seeds: [
            {
            id: 9,
            date: new Date().toDateString(),
            teams: [{ name: 'Team A' }, { name: 'Team C' }],
            },
            {
                id: 10,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team C' }],
            },
            {
                id: 11,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team C' }],
            },
            {
                id: 12,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team C' }],
            },
        ],
        },
        {
            title: 'Semifinals',
            seeds: [
                {
                id: 13,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team C' }],
                },
                {
                    id: 14,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team C' }],
                },
            ],
        },
        {
            title: 'Finals',
            seeds: [
                {
                id: 14,
                date: new Date().toDateString(),
                teams: [{ name: 'Team A' }, { name: 'Team C' }],
                },
            ],
        },
    ];

    const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}) => {
        // breakpoint passed to Bracket component
        // to check if mobile view is triggered or not
      
        // mobileBreakpoint is required to be passed down to a seed
        return (
          <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
            <SeedItem>
              <div>
                <SeedTeam style={{ color: 'red' }}>{seed.teams[0]?.name || 'NO TEAM '}</SeedTeam>
                <SeedTeam>{seed.teams[1]?.name || 'NO TEAM '}</SeedTeam>
              </div>
            </SeedItem>
          </Seed>
        );
      };

    return (
        <div className='bracketsContainer'>
            <Bracket rounds={rounds} renderSeedComponent={CustomSeed}/>
        </div> 
    );
}

export default StagesContainer;