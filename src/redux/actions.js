export const ADD_QUALIFIED = 'ADD_QUALIFIED'

export const addCountriesGroup = (payload) => {
    return(
        {type: ADD_QUALIFIED, payload:payload}
    )
}