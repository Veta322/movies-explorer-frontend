import { checkResponse } from './utils';

export const BASE_URL = 'https://api.movies-explorer.nomorepartiesxyz.ru';

export const getCards = () => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => checkResponse(res));
  };
  