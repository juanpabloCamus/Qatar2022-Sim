export const ADD_QUALIFIED = 'ADD_QUALIFIED'
export const ADD_WINNER_TEAM = 'ADD_WINNER_TEAM'
export const RESTART = 'RESTART'

export const addCountriesGroup = (payload) => {
    return(
        {type: ADD_QUALIFIED, payload:payload}
    )
}

export const addWinnerTeam = (payload) => {
    return(
        {type: ADD_WINNER_TEAM, payload:payload}
    )
}

export const restart = () => {
    return({type:RESTART} )
}