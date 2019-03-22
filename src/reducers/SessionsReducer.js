const initState = {
   
    sessionList: [],
    sessionDetail:{}
}

const sessionReducer = (state= initState, action) => {
    switch (action.type) {
        case 'FETCH_SESSION':
            return {
                ...state,
                sessionList: action.payload
            }
       
        case 'FETCH_DETAIL':
        return {
            ...state, sessionDetail: action.payload
        }
        default:
            return state
    }
    
}

export default sessionReducer;