import 'whatwg-fetch';

import { PHOTO_API_BASE_URL, PHOTO_API_KEY } from '../config/api';
import { buildQueryString } from './helpers';

function request(endpoint, method = 'GET', extraHeaders) {
  return fetch(`${PHOTO_API_BASE_URL}/${endpoint}&consumer_key=${PHOTO_API_KEY}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
  }).then(response => response.json());
}

export function get(endpoint, params) {
  const queryString = buildQueryString(params);
  const url = `${endpoint}?${queryString}`;
  return request(url);
}
