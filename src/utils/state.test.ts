import { state } from './state';

it('state 함수 테스트', () => {
  const data = state({ title: 1234 });
  data.value.title = 99999999;
  expect(data.value.title).toBe(99999999);
});
