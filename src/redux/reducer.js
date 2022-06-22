
import Group from "../components/Groups/Group";
import { ADD_QUALIFIED } from "./actions";

const initialState = [
    {},{},{},{},{},{},{},{}
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

        default: return {...state}
    }

}

export default reducer;