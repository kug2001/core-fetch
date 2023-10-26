import { CreateUrlOptions } from './types';
import { state } from '../utils/state';

export const createUrlInstance = (
  url: string,
  options: CreateUrlOptions = {}
): URL => {
  // hostInit is require default http:localhost:3000
  const hostInit = state('http:localhost:3000');
  if (window) {
    const { host, port, protocol } = window.location;
    hostInit.value = `${protocol}//${host}${port ?? `:${port}`}`;
  }
  const { hostName, query } = options;
  const urlInstance = new URL(url, hostName || hostInit.value);
  // query is not undefined
  if (query) {
    const { searchParams } = urlInstance;
    const queryList = Object.entries(query);
    queryList.forEach(([key, value]) =>
      searchParams.append(key, String(value))
    );
  }
  return urlInstance;
};
