import axios from 'axios'

const BASE_URL = '/api/jobs';

export const getAllJobs = () => axios.get(BASE_URL);