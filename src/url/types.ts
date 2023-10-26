export type SearchParams = Record<
  string,
  string | number | boolean | undefined | null
>;

export interface CreateUrlOptions {
  hostName?: string;
  query?: SearchParams;
}
