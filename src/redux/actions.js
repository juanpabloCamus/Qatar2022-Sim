export const ADD_QUALIFIED = 'ADD_QUALIFIED'
export const ADD_QUARTER_FINAL_TEAM = 'ADD_QUARTER_FINAL_TEAM'

export const addCountriesGroup = (payload) => {
    return(
        {type: ADD_QUALIFIED, payload:payload}
    )
}

export const addQuarterFinalTeam = (payload) => {
    return(
        {type: ADD_QUARTER_FINAL_TEAM, payload:payload}
    )
}