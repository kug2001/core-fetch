import { coreFetch } from './fetch';
/**
 * @jest-environment jsdom
 */
describe('createUrlInstance 함수 테스트', () => {
  const testCase = [
    {
      args: {
        url: '/',
        options: {
          hostName: undefined,
          query: {
            test: 'test',
            pageIndex: 1,
            pageSize: 10
          }
        }
      },
      expected: '1'
    },
    {
      args: {
        url: '/abcd/abcd',
        options: {
          hostName: 'http://exam.com',
          query: {
            q: 'test1',
            pageIndex: 1,
            pageSize: 10
          }
        }
      },
      expected: '1'
    },
    {
      args: {
        url: '/',
        options: undefined
      },
      expected: '1'
    }
  ];
  it.each(testCase)('%#번 테스트', testCase => {
    const { args, expected } = testCase;
    const { url, options } = args;
    // const result = coreFetch(url, options);
    // expect(result).toBe(expected);
  });
});
