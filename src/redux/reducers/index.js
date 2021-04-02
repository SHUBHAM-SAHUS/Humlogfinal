import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { jobReducer } from './jobReducer';
import { userReducer } from './userReducer';
import { jobCategoryReducer } from './jobCategoryReducer';




const reducers = combineReducers({
        authReducer,userReducer,jobReducer,jobCategoryReducer,
});

export default reducers;
