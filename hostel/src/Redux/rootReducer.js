import {combineReducers} from 'redux';

import userReducer from './user/user.reducer.js';
import allUsersReducer from './allUsers/allUsers.reducer';

export default combineReducers({
    user: userReducer,
    allUsers: allUsersReducer
})