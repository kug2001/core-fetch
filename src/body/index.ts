import { CovertKey, BodyOption } from './types';

export const bodyConvert = (key: CovertKey, body: BodyOption) => {
  if (key === 'formData') {
  } else {
    return JSON.stringify(body);
  }
};
