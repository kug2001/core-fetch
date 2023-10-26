import { defu } from 'defu';
import { FetchOptions } from './types';
import { createUrlInstance } from '../url';
import { bodyConvert } from '../body';

export const coreFetch = (url: string, options: Partial<FetchOptions> = {}) => {
  const {
    body,
    query,
    credentials,
    keepalive,
    integrity,
    mode,
    referrerPolicy,
    redirect
  } = options;

  /**
   * 기본값
   */
  const defaultOptions: Partial<RequestInit> = {
    method: 'GET',
    cache: 'default',
    keepalive: false,
    credentials: 'same-origin',
    mode: 'cors',
    referrerPolicy: 'no-referrer',
    redirect: 'follow'
  };

  /**
   * URL Instance 생성
   */
  const urlInstance = createUrlInstance(url, { query });

  const fetchOptions: RequestInit = {
    body: bodyConvert('json', body),
    keepalive,
    credentials,
    integrity,
    mode,
    referrerPolicy,
    redirect
  };
  return fetch(urlInstance, defu(defaultOptions, fetchOptions));
};
