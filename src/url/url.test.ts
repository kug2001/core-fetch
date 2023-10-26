import { createUrlInstance } from './';

describe('createUrlInstance 함수 테스트', () => {
  const testCase = [
    {
      args: {
        url: '/',
        options: {
          hostName: 'http://localhost:3000',
          query: {
            test: 'test',
            pageIndex: 1,
            pageSize: 10
          }
        }
      },
      expected: 'http://localhost:3000/?test=test&pageIndex=1&pageSize=10'
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
      expected: 'http://exam.com/abcd/abcd?q=test1&pageIndex=1&pageSize=10'
    },
    {
      args: {
        url: '/',
        options: undefined
      },
      expected: 'http://localhost/'
    }
  ];
  it.each(testCase)('%#번 테스트', testCase => {
    const { args, expected } = testCase;
    const { url, options } = args;
    const result = createUrlInstance(url, options);
    expect(result.href).toBe(expected);
  });
});
