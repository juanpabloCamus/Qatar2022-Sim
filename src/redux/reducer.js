
import Group from "../components/Groups/Group";
import { ADD_QUALIFIED, ADD_QUARTER_FINAL_TEAM } from "./actions";

const initialState = [
    {},{},{},{},{},{},{},{},{
        Stage: 'Quarter finals',
        Winner1:'Winner1',
        Winner2:'Winner2',
        Winner3:'Winner3',
        Winner4:'Winner4',
        Winner5:'Winner5',
        Winner6:'Winner6',
        Winner7:'Winner7',
        Winner8:'Winner8',
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

        case ADD_QUARTER_FINAL_TEAM:{
            switch(action.payload.id){

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

                default: return {...state}
            }
        }

        default: return {...state}
    }

}

export default reducer;