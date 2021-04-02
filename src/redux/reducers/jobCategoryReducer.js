import { JobCategoryActionTypes } from '../actions/jobcategory/actionType';
export const initialState = {
    JobCategoryList: [],
    isLoading: false,
    JobCategoryDetails: {},
    count: 0
}

export const jobCategoryReducer = (state = initialState, action) => {
    switch (action.type) {

      case JobCategoryActionTypes.GET_JobCategory_PENDING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case JobCategoryActionTypes.GET_JobCategory_FULFILLED:
      return Object.assign({}, state, {
        isLoading: false,
        JobCategoryDetails: action.payload.data
      });
    
      case JobCategoryActionTypes.GET_JobCategory_LIST_PENDING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case JobCategoryActionTypes.GET_JobCategory_LIST_FULFILLED:
        
      return Object.assign({}, state, {
        isLoading: false,
        JobCategoryList: action.payload.data
      });
       
        default: return state;
    }
}