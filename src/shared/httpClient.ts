import axios, { AxiosError } from 'axios';
import { createEvent } from 'effector';
import Cookies from 'js-cookie';
import { match } from 'ts-pattern';


export const httpClient = axios.create({
  baseURL: 'https://test.v5.pryaniky.com'
});

export const setErrorResponse = createEvent<string>('set error message')

httpClient.interceptors.request.use((config) => {
  const token = Cookies.get('authToken');
  if (token) {
    config.headers['x-auth'] = `${token}`;
  }

  return config;
},
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (config) => {
    if (config.data['error_code'] !== 0) setErrorResponse("Неверный логин или пароль");
    return config;
  },
  (error: AxiosError) => {
    const message = match<number | undefined>(error.response?.status)
      .with(400, () => 'Некорректные данные для ввода')
      .with(403, () => 'Доступ запрещен')
      .with(422, () => 'Ошибка валидации')
      .with(404, () => 'Не найдено')
      .with(500, () => 'Ошибка на сервере')
      .otherwise(() => 'Неизвестная ошибка');

    setErrorResponse(message)


    return Promise.reject(error);
  }
);