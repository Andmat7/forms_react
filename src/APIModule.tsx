import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { mockData } from './api/mockData';

const mockAxios: AxiosInstance = axios.create();

// Configuración del interceptor de respuesta
mockAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    // Verifica si la respuesta es satisfactoria y contiene datos
    // Si no contiene datos (por ejemplo, un array vacío o un objeto vacío), retorna los datos del mock
    if (!response.data || Object.keys(response.data).length === 0) {
      console.log("No se encontraron datos. Retornando datos del mock.");
      return Promise.resolve({
        data: mockData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: response.config,
      });
    }
    // Si la respuesta es satisfactoria y contiene datos, retorna la respuesta original
    return response;
  }, 
  (error) => {
    // En caso de error en la solicitud (por ejemplo, error de red o error del servidor),
    // también puedes optar por retornar los datos del mock
    console.log("Error en la solicitud. Retornando datos del mock.");
    return Promise.resolve({
      data: mockData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: error.config,
    });
    // O si prefieres manejar el error de otra manera, descomenta la siguiente línea
    // return Promise.reject(error);
  }
);

export const fetchForm = (): Promise<any> => {
    return mockAxios.get('/api/v1/form/blocks')
        .then(response => response.data);
};
