const initState = {
    topic: "",
    name: "",
    picture: ""
}

const sessionReducer = (state= initState, action) => {
    switch (action.type) {
        case 'FETCH_SESSION':
            return {
                ...state,
                sessionList: action.payload
            }
        case 'SEND_TEXT_INPUT':
        return {
            ...state, textInput: action.payload
        }
        case 'GET_RESULT':
        return {
            ...state, companyList: action.payload
        }
        case 'FETCH_DELETE':
        return {
            ...state, companyList: state.companyList.filter((company) => company.id !== action.payload)
        }
        case 'GET_DETAIL':
        return {
            ...state, selectedCompany: action.payload
        }
        default:
            return state
    }
    
}

export default sessionReducer;