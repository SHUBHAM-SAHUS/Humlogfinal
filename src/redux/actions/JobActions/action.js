import * as API from 'api';

import { JobActionTypes } from './actionType';

export const getJobData = (id) => dispatch =>  dispatch({
    type: JobActionTypes.GET_JOB,
    payload: API.getJobById(id)
})

export const getJobListData = (id) => dispatch => dispatch({
    type: JobActionTypes.GET_JOB_LIST,
    payload: API.getAllJobs(id)
})

export const getJobListDataById = (id) => dispatch =>  dispatch({
    type: JobActionTypes.GET_JOB_LIST,
    payload: API.getJobListDataById(id)
})

export const createJobData = (body) => dispatch =>  dispatch({
    
    type: JobActionTypes.CREATE_JOB_DATA,
    payload: API.createJob(body)
})

export const updateJobData = (body) => dispatch =>  dispatch({
    
    type: JobActionTypes.UPDATE_JOB_DATA,
    payload: API.updateJob(body)
})

export const getUserListByJobId = (id) => dispatch => dispatch({
    type : JobActionTypes.GET_USER_LIST,
    payload : API.getUserListByJobId(id)
})

export const scheduleInterview = (body) => dispatch =>  dispatch({
    
    type: JobActionTypes.SCHEDULE_INTERVIEW_DATA,
    payload: API.scheduleInterview(body)
})

export const getInterviewByJobId = (id) => dispatch => dispatch({
    type : JobActionTypes.GET_INTERVIEW_LIST,
    payload : API.getInterviewByJobId(id)
})
export const getInterviewByUserId = (id) => dispatch => dispatch({
    type : JobActionTypes.GET_INTERVIEW_LIST,
    payload : API.getInterviewByUserId(id)
})