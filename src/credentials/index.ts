export const isCredentials = (value: boolean): RequestCredentials => {
  if (value) return 'include';
  return undefined;
};
