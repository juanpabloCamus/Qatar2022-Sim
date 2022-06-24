import React, { useState } from 'react';
import './StagesContainer.css';
import { Bracket, RoundProps, Seed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { addWinnerTeam } from '../../redux/actions';
import cup from '../../assets/copa.png'

function StagesContainer() {

    const qualifiedTeams = useSelector(state => state)
    const dispatch = useDispatch()
    const [champion, setChampion] = useState({
        state: false,
        name:''
    })
   
    const rounds = [
        {
        title: '',
        seeds: [
            {
            id: 1,
            date: 'Sat Dec 3 2022',
            teams: [{ name: qualifiedTeams[0].first }, { name: qualifiedTeams[1].second }],
            },
            {
            id: 2,
            date: 'Sat Dec 3 2022',
            teams: [{ name: qualifiedTeams[2].first }, { name: qualifiedTeams[3].second }],
            },
            {
            id: 3,
            date: 'Sun Dec 4 2022',
            teams: [{ name: qualifiedTeams[4].first }, { name: qualifiedTeams[5].second }],
            },
            {
                id: 4,
                date: 'Sun Dec 4 2022',
                teams: [{ name: qualifiedTeams[6].first }, { name: qualifiedTeams[7].second }],
            },
            {
                id: 5,
                date: 'Mon Dec 5 2022',
                teams: [{ name: qualifiedTeams[1].first }, { name: qualifiedTeams[0].second }],
            },
            {
                id: 6,
                date: 'Mon Dec 5 2022',
                teams: [{ name: qualifiedTeams[3].first }, { name: qualifiedTeams[2].second }],
            },
            {
                id: 7,
                date: 'Tue Dec 6 2022',
                teams: [{ name: qualifiedTeams[5].first }, { name: qualifiedTeams[4].second }],
            },
            {
                id: 8,
                date: 'Tue Dec 6 2022',
                teams: [{ name: qualifiedTeams[7].first }, { name: qualifiedTeams[6].second }],
            },
            
        ],
        },
        {
        title: '',
        seeds: [
            {
            id: 9,
            date: 'Fri Dec 9 2022',
            teams: [{ name: qualifiedTeams[8].Winner1 }, { name: qualifiedTeams[8].Winner2 }],
            },
            {
                id: 10,
                date: 'Fri Dec 9 2022',
                teams: [{ name: qualifiedTeams[8].Winner3 }, { name: qualifiedTeams[8].Winner4 }],
            },
            {
                id: 11,
                date: 'Sat Dec 10 2022',
                teams: [{ name: qualifiedTeams[8].Winner5 }, { name: qualifiedTeams[8].Winner6 }],
            },
            {
                id: 12,
                date: 'Sat Dec 10 2022',
                teams: [{ name: qualifiedTeams[8].Winner7 }, { name: qualifiedTeams[8].Winner8 }],
            },
        ],
        },
        {
            title: '',
            seeds: [
                {
                id: 13,
                date: 'Tue Dec 13 2022',
                teams: [{ name: qualifiedTeams[9].Winner9 }, { name: qualifiedTeams[9].Winner10 }],
                },
                {
                    id: 14,
                    date: 'Wed Dec 14 2022',
                    teams: [{ name: qualifiedTeams[9].Winner11 }, { name: qualifiedTeams[9].Winner12 }],
                },
            ],
        },
        {
            title: '',
            seeds: [
                {
                id: 15,
                date: 'Sun Dec 18 2022',
                teams: [{ name: qualifiedTeams[10].Winner13 }, { name: qualifiedTeams[10].Winner14 }],
                },
            ],
        },
    ];

    const handleWinnerRound = (e,id)=>{  
        if(e.target.innerHTML === 'NO TEAM ' || e.target.innerHTML.includes('Winner')) return
        if(id === 15){
            return setChampion({state: true,name:e.target.innerHTML})
        } 
        dispatch(addWinnerTeam({id:id,winner:e.target.innerHTML}))
    }

    const CustomSeed = ({seed, breakpoint, roundIndex, seedIndex}) => {
        return (
        <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 16,  }}>
            <SeedItem>
            <div className='seed'>
                <SeedTeam style={{ 
                    borderBottom: '1px solid #707070',
                    cursor:'pointer',
                    paddingBottom:'10px',
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
            <h3 id='swipe'>Swipe to left to see the next rounds</h3>
            <div className='main'>
            <Bracket rounds={rounds} renderSeedComponent={CustomSeed}/>
            <div className='champion'>
                <img id='cup' src={cup}></img>
                {
                    champion.state ? <h3>Congrats {champion.name}!</h3> : null
                }
            </div>
            </div>
        </div> 
    );
}

export default StagesContainer;
//style={{ color: 'red' }}