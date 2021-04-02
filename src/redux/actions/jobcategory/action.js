import * as API from 'api';

import { JobCategoryActionTypes } from './actionType';

export const getJobCategoryData = (id) => dispatch =>  dispatch({
    type: JobCategoryActionTypes.GET_JobCategory,
    payload: API.getJobCategoryById(id)
})

export const getJobCategoryListData = () => dispatch =>  dispatch({
    type: JobCategoryActionTypes.GET_JobCategory_LIST,
    payload: API.getAllJobCategories()
})
