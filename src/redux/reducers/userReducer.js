import { UserActionTypes } from '../actions/UserActions/actionType';
import storage from 'utils/storage';

export const initialState = {
    userList: [],
    isLoading: false,
    userDetails: {},
    userDetailsById: {},
    count: 0
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

      case UserActionTypes.GET_USER_PENDING:
      return Object.assign({}, state, {
        isLoading: true,
        userDetails: {}
      });
    case UserActionTypes.GET_USER_FULFILLED:
      return Object.assign({}, state, {
        isLoading: false,
        userDetails: action.payload.data
      });


      case UserActionTypes.GET_USER_BY_SARTHI_PENDING:
      return Object.assign({}, state, {
        isLoading: true,
        userDetails: {}
      });
    case UserActionTypes.GET_USER_BY_SARTHI_FULFILLED:
      return Object.assign({}, state, {
        isLoading: false,
        userDetailsById: action.payload.data
      });
      
      case UserActionTypes.UPDATE_USER_DATA_PENDING:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case UserActionTypes.UPDATE_USER_DATA_FULFILLED:
            return Object.assign({}, state, {
              isLoading: false,
              userDetails: action.payload.data
            });

        case UserActionTypes.UPSERT_USER_DATA_PENDING:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case UserActionTypes.UPSERT_USER_DATA_FULFILLED:
            return Object.assign({}, state, {
              isLoading: false,
              userDetailsById: action.payload.data
            });

            case UserActionTypes.CONFIRM_OTP_PENDING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case UserActionTypes.CONFIRM_OTP_FULFILLED:
      return Object.assign({}, state, {
        isLoading: false,
      });

       
        default: return state;
    }
}