const INITIAL_STATE = {
    allUsers: []
}

const allUsersReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'GET_ALL_USERS':
            return {
                ...state,
                allUsers: action.payload
            }
            default:
                return state
    }
}

export default allUsersReducer