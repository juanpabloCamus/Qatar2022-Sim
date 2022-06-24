
import Group from "../components/Groups/Group";
import { ADD_QUALIFIED, ADD_WINNER_TEAM, RESTART } from "./actions";

const initialState = [
    {},{},{},{},{},{},{},{},{
        Stage: 'Quarter finals',
        Winner1:'Winner 1',
        Winner2:'Winner 2',
        Winner3:'Winner 3',
        Winner4:'Winner 4',
        Winner5:'Winner 5',
        Winner6:'Winner 6',
        Winner7:'Winner 7',
        Winner8:'Winner 8',
    },
    {
        Stage: 'Semifinals',
        Winner9:'Winner 9',
        Winner10:'Winner 10',
        Winner11:'Winner 11',
        Winner12:'Winner 12'
    },
    {
        Stage: 'Finals',
        Winner13:'Winner 13',
        Winner14:'Winner 14'
    }

]
;

const reducer = (state = initialState, action) =>{

    switch(action.type){

        case ADD_QUALIFIED:{

            let letter = action.payload.group.slice(6)
            
            switch(letter){
                case 'A':{
                    if (letter !== 'A') return {...state}
                    state[0] = action.payload
                }
                case 'B':{
                    if (letter !== 'B') return {...state}
                    state[1] = action.payload
                }
                case 'C':{
                    if (letter !== 'C') return {...state}
                    state[2] = action.payload
                }
                case 'D':{
                    if (letter !== 'D') return {...state}
                    state[3] = action.payload
                }
                case 'E':{
                    if (letter !== 'E') return {...state}
                    state[4] = action.payload
                }
                case 'F':{
                    if (letter !== 'F') return {...state}
                    state[5] = action.payload
                }
                case 'G':{
                    if (letter !== 'G') return {...state}
                    state[6] = action.payload
                }
                case 'H':{
                    if (letter !== 'H') return {...state}
                    state[7] = action.payload
                }
                default: return {...state}
            }
        }

        case ADD_WINNER_TEAM:{
            switch(action.payload.id){
                //Quarterfinals
                case 1:{
                    if (action.payload.id !== 1) return {...state}
                    state[8].Winner1 = action.payload.winner
                }
                case 2:{
                    if (action.payload.id !== 2) return {...state}
                    state[8].Winner2 = action.payload.winner
                }
                case 3:{
                    if (action.payload.id !== 3) return {...state}
                    state[8].Winner3 = action.payload.winner
                }
                case 4:{
                    if (action.payload.id !== 4) return {...state}
                    state[8].Winner4 = action.payload.winner
                }
                case 5:{
                    if (action.payload.id !== 5) return {...state}
                    state[8].Winner5 = action.payload.winner
                }
                case 6:{
                    if (action.payload.id !== 6) return {...state}
                    state[8].Winner6 = action.payload.winner
                }
                case 7:{
                    if (action.payload.id !== 7) return {...state}
                    state[8].Winner7 = action.payload.winner
                }
                case 8:{
                    if (action.payload.id !== 8) return {...state}
                    state[8].Winner8 = action.payload.winner
                }
                case 9:{
                    if (action.payload.id !== 9) return {...state}
                    state[9].Winner9 = action.payload.winner
                }
                case 10:{
                    if (action.payload.id !== 10) return {...state}
                    state[9].Winner10 = action.payload.winner
                }
                case 11:{
                    if (action.payload.id !== 11) return {...state}
                    state[9].Winner11 = action.payload.winner
                }
                case 12:{
                    if (action.payload.id !== 12) return {...state}
                    state[9].Winner12 = action.payload.winner
                }
                case 13:{
                    if (action.payload.id !== 13) return {...state}
                    state[10].Winner13 = action.payload.winner
                }
                case 14:{
                    if (action.payload.id !== 14) return {...state}
                    state[10].Winner14 = action.payload.winner
                }

                default: return {...state}
            }
        }

        case RESTART:{
            state = [
                {},{},{},{},{},{},{},{},{
                    Stage: 'Quarter finals',
                    Winner1:'Winner 1',
                    Winner2:'Winner 2',
                    Winner3:'Winner 3',
                    Winner4:'Winner 4',
                    Winner5:'Winner 5',
                    Winner6:'Winner 6',
                    Winner7:'Winner 7',
                    Winner8:'Winner 8',
                },
                {
                    Stage: 'Semifinals',
                    Winner9:'Winner 9',
                    Winner10:'Winner 10',
                    Winner11:'Winner 11',
                    Winner12:'Winner 12'
                },
                {
                    Stage: 'Finals',
                    Winner13:'Winner 13',
                    Winner14:'Winner 14'
                }
            
            ]
        }

        default: return {...state}
    }

}

export default reducer;