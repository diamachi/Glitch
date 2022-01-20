const initState = {
    popular : [],
    newGames : [],
    upcoming : []
}

const gamesReducer =(state=initState,action) => {
    switch(action.type){
        case "FETCH-GAMES": 
            return {...state}
        default: 
            return {...state}
    }
}

export default gamesReducer;