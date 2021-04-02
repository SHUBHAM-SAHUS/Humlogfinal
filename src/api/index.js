import axios from 'config';
import {API_VIRSION } from "config"
// Auth api
export const getOTP = (body) => axios.post(`/login/user`, body.data);
export const recruiterLogin = (body) => axios.post(`/login`, body.data);
export const recruiterSignup = (body) => axios.post(`/register`, body.data);
export const sarthiSignup = (body) => axios.post(`/register/saarthi`, body.data);
export const sarthiLogin = (body) => axios.post(`/login/saarthi`, body.data);
export const varifyOTP = (body) => axios.post(`/login/confirm`, body.data);
export const refreshToken = () =>  axios.post(`${API_VIRSION}/auth/refreshtoken`);

// User api
export const getUser = (id) => axios.get(`/user/`, {params: {_id: id }});
export const getAllUser = () => axios.get(`/user/all`);
export const getUserCreatedBy = (id) => axios.get(`/user/`, {params: {_id: id }});

export const updateUser = (body) => axios.put(`/user`, body.formData,{ headers: {'Content-Type': 'multipart/form-data' }});
export const scheduleInterview = (body) => axios.post(`/job/interview`, body.data);

// Jobs Api
export const createJob = (body) => axios.post(`/job/post`, body.formData,{ headers: {'Content-Type': 'multipart/form-data' }});
export const updateJob = (body) => axios.put(`/job/post`, body.formData,{ headers: {'Content-Type': 'multipart/form-data' }});
export const getJobById = (id) => axios.get(`/job/one`, {params: {_id: id }});
export const getJobListDataById = (id) => axios.get(`/job/recruiter/`, {params: {created_by: id }});

export const getAllJobs = (id) => axios.get(`/job/all`,{params: {user_id: id }});
export const getUserListByJobId = (id) => axios.get(`/job/users`,{params: {_id: id}});

export const  getInterviewByUserId = (id) => axios.get(`/job/interviews-by-seeker/${id}`);
export const  getInterviewByJobId = (id) => axios.get(`/job/interviews-by-job/${id}`);


// JobCategory Api
export const getJobCategoryById = (id) => axios.get(`/job-category/one`, {params: {_id: id }});
export const getAllJobCategories = () => axios.get(`/job-category`);

// Sarthi Api
export const createUserBySarthi = (body) => axios.post(`/user/saarthi`, body.formData,{ headers: {'Content-Type': 'multipart/form-data' }});
export const sendOtp = (body) => axios.post(`user/verify`);
export const confirmUser = (body) => axios.post(`user/confirm`);

