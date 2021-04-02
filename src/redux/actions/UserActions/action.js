import axios from 'config';
import * as API from 'api';
import storage from 'utils/storage';

import { UserActionTypes } from './actionType';

export const getUserData = (id) => dispatch =>  dispatch({
    type: UserActionTypes.GET_User,
    payload: API.getUser(id)
})

export const getUserDataBySarthi = (id) => dispatch =>  dispatch({
    type: UserActionTypes.GET_USER_BY_SARTHI,
    payload: API.getUser(id)
})
export const updateUserData = (body) => dispatch =>  dispatch({
    
    type: UserActionTypes.UPDATE_USER_DATA,
    payload: API.updateUser(body)
})

export const upsertUserData = (body) => dispatch =>  dispatch({
    
    type: UserActionTypes.UPSERT_USER_DATA,
    payload: API.createUserBySarthi(body)
})
export const varifyOTP = (body) => dispatch =>  dispatch({
    type: UserActionTypes.CONFIRM_OTP,
    payload: API.varifyOTP(body)
   
})