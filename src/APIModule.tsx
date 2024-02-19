import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { mockData } from './api/mockData';

const mockAxios: AxiosInstance = axios.create();

mockAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (!response.data || Object.keys(response.data).length === 0) {
      console.log("No data found. Returning mock data.");
      return Promise.resolve({
        data: mockData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: response.config,
      });
    }
    return response;
  }, 
  (error) => {
    console.log("Request error. Returning mock data.");
    return Promise.resolve({
      data: mockData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: error.config,
    });
  }
);

export const fetchForm = (): Promise<any> => {
    return mockAxios.get('/api/v1/form/blocks')
        .then(response => response.data.blocks);
};
