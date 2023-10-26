import { SearchParams } from '../url/types';
import { BodyOption } from '../body/types';
import type { RequestMethods } from '../methods/types';
import type { RequestCache } from '../cache/types';
import type { HeadersInit } from '../headers/types';

export interface FetchOptions {
  /**
   * host 주소 지정 default: window location host
   */
  hostName: string;
  /**
   * Record 형태의 query
   */
  query: SearchParams;
  /**
   * Record 형태의 body 데이터
   */
  body: BodyOption;
  /**
   * A Headers object, an object literal,
   * or an array of two-item arrays to set request's headers.
   */
  headers: HeadersInit;
  /**
   * GET | HEAD | POST | PUT | DELETE | CONNECT | OPTIONS | TRACE | TRACE | PATCH
   * @default 'GET'
   */
  method: RequestMethods;
  /**
   *  A string indicating how the request will interact with the browser's cache to set request's cache.
   *  'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
   * @default 'default'
   */
  cache: RequestCache;
  /**
   * A string indicating whether credentials will be sent with the request always,
   * never, or only when sent to a same-origin URL. Sets request's credentials.
   * @default 'same-origin
   */
  credentials: RequestCredentials;
  /**
   * A cryptographic hash of the resource to be fetched by request.
   * Sets request's integrity.
   */
  integrity: string;
  /**
   * A boolean to set request's keepalive.
   * @default false
   */
  keepalive: boolean;
  /**
   * A string to set request's method.
   * @default 'cors'
   */
  mode: RequestMode;
  /**
   * A string indicating whether request follows redirects
   * results in an error upon encountering a redirect, or returns
   * the redirect (in an opaque fashion). Sets request's redirect.
   */
  redirect: RequestRedirect;
  /**
   * A string whose value is a same-origin URL, "about:client", or the empty string,
   * to set request's referrer.
   */
  referrer: string;
  /**
   * A referrer policy to set request's referrerPolicy.
   * @default 'no-referrer'
   */
  referrerPolicy: ReferrerPolicy;
  /** An AbortSignal to set request's signal. */
  signal: AbortSignal | null;
  /** Can only be null. Used to disassociate request from any Window. */
  window: null;
}
