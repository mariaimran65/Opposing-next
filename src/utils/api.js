import axios from 'axios';

// export const baseURL = `http://localhost:8080/api/`;
export const baseURL = `https://opposingcylinders.com/api/`;

export const WASABI_URL = 'https://s3.us-east-1.wasabisys.com/vehicle-project/';

export const httpClient = axios.create({
  baseURL
});
