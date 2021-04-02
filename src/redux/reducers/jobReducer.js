import { JobActionTypes } from '../actions/JobActions/actionType';
export const initialState = {
    jobList: [],
    interviewList:[],
    isLoading: false,
    jobDetails: {},
    count: 0
}

export const jobReducer = (state = initialState, action) => {
    switch (action.type) {

      case JobActionTypes.GET_JOB_PENDING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case JobActionTypes.GET_JOB_FULFILLED:
      return Object.assign({}, state, {
        isLoading: false,
        jobDetails: action.payload.data
      });
    
      case JobActionTypes.GET_JOB_LIST_PENDING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case JobActionTypes.GET_JOB_LIST_FULFILLED:
      return Object.assign({}, state, {
        isLoading: false,
        jobList: action.payload.data
      });

      case JobActionTypes.CREATE_JOB_DATA_PENDING:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case JobActionTypes.CREATE_JOB_DATA_FULFILLED:
            return Object.assign({}, state, {
              isLoading: false,
              jobDetails: action.payload.data
            });

        case JobActionTypes.UPDATE_JOB_DATA_PENDING:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case JobActionTypes.UPDATE_JOB_DATA_FULFILLED:
            return Object.assign({}, state, {
              isLoading: false,
              userDetails: action.payload.data
            });

            case JobActionTypes.GET_USER_LIST_PENDING :
              return Object.assign({},state, {
                isLoading: true
              });
            case JobActionTypes.GET_USER_LIST_FULFILLED:
              return Object.assign({}, state, {
                isLoading : false,
                userList : action.payload.data
              });

              case JobActionTypes.SCHEDULE_INTERVIEW_DATA_PENDING:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case JobActionTypes.SCHEDULE_INTERVIEW_DATA_FULFILLED:
            return Object.assign({}, state, {
              isLoading: false,
            });

            case JobActionTypes.GET_INTERVIEW_LIST_PENDING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case JobActionTypes.GET_INTERVIEW_LIST_FULFILLED:
      return Object.assign({}, state, {
        isLoading: false,
        interviewList: action.payload.data
      });


       
        default: return state;
    }
}