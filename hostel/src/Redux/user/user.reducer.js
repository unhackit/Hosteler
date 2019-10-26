const INITIAL_STATE = {
    currentUser: {
        createdAt: '',
        displayName: '',
        email: '',
        id: '',
        registration: false,
        role: ''
    }
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state
    }
}

export default userReducer;