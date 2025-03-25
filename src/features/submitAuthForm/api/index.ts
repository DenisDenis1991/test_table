import { httpClient } from '@/shared/httpClient';
import { IDataFormValues } from '@/shared/types';
import Cookies from 'js-cookie';

export const fetchUserLogin = async (
  user: IDataFormValues | null
) => {
  const { data } = await httpClient.post(
    '/ru/data/v3/testmethods/docs/login/',
    { ...user }
  );

  await (data);
  if (data.data.token) {
    Cookies.set('authToken', data.data.token, {
      expires: 1, // Время жизни токена (1 день)
      secure: true, // Использовать только через HTTPS
      sameSite: 'Strict', // Защита от CSRF
    });
  }

  return data;
};