import React from 'react';
import './StagesContainer.css';
import { Bracket, RoundProps, Seed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { addWinnerTeam } from '../../redux/actions';

function StagesContainer() {

    const qualifiedTeams = useSelector(state => state)
    const dispatch = useDispatch()
   
    const rounds = [
        {
        title: 'Round of 16',
        seeds: [
            {
            id: 1,
            date: new Date().toDateString(),
            teams: [{ name: qualifiedTeams[0].first }, { name: qualifiedTeams[1].second }],
            },
            {
            id: 2,
            date: new Date().toDateString(),
            teams: [{ name: qualifiedTeams[2].first }, { name: qualifiedTeams[3].second }],
            },
            {
            id: 3,
            date: new Date().toDateString(),
            teams: [{ name: qualifiedTeams[4].first }, { name: qualifiedTeams[5].second }],
            },
            {
                id: 4,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[6].first }, { name: qualifiedTeams[7].second }],
            },
            {
                id: 5,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[1].first }, { name: qualifiedTeams[0].second }],
            },
            {
                id: 6,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[3].first }, { name: qualifiedTeams[2].second }],
            },
            {
                id: 7,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[5].first }, { name: qualifiedTeams[4].second }],
            },
            {
                id: 8,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[7].first }, { name: qualifiedTeams[6].second }],
            },
            
        ],
        },
        {
        title: 'Quarter finals',
        seeds: [
            {
            id: 9,
            date: new Date().toDateString(),
            teams: [{ name: qualifiedTeams[8].Winner1 }, { name: qualifiedTeams[8].Winner2 }],
            },
            {
                id: 10,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[8].Winner3 }, { name: qualifiedTeams[8].Winner4 }],
            },
            {
                id: 11,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[8].Winner5 }, { name: qualifiedTeams[8].Winner6 }],
            },
            {
                id: 12,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[8].Winner7 }, { name: qualifiedTeams[8].Winner8 }],
            },
        ],
        },
        {
            title: 'Semifinals',
            seeds: [
                {
                id: 13,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[9].Winner9 }, { name: qualifiedTeams[9].Winner10 }],
                },
                {
                    id: 14,
                    date: new Date().toDateString(),
                    teams: [{ name: qualifiedTeams[9].Winner11 }, { name: qualifiedTeams[9].Winner12 }],
                },
            ],
        },
        {
            title: 'Finals',
            seeds: [
                {
                id: 14,
                date: new Date().toDateString(),
                teams: [{ name: qualifiedTeams[10].Winner13 }, { name: qualifiedTeams[10].Winner14 }],
                },
            ],
        },
    ];

    const handleWinnerRound = (e,id)=>{  
        dispatch(addWinnerTeam({id:id,winner:e.target.innerHTML}))
    }

    const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}) => {
    
        return (
        <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 16 }}>
            <SeedItem>
            <div className='seed'>
                <SeedTeam style={{ 
                    borderBottom: '1px solid #707070',
                    cursor:'pointer',
                    paddingBottom:'10px'
                    }} 
                    onClick={(e)=> handleWinnerRound(e,seed.id)}>{seed.teams[0]?.name || 'NO TEAM '}</SeedTeam>
                <SeedTeam style={{
                    cursor:'pointer',
                    paddingTop:'10px'
                    }}
                    onClick={(e)=>handleWinnerRound(e,seed.id)}>{seed.teams[1]?.name || 'NO TEAM '}</SeedTeam>
            </div>
            </SeedItem>
            <label id='date'>{seed.date}</label>
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
//style={{ color: 'red' }}