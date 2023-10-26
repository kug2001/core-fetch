module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        /**
         * @description 문장의 래핑할 최대 길이를 지정합니다.
         * @see https://prettier.io/docs/en/options.html#print-width
         */
        printWidth: 80,
        /**
         * @description 문장의 들여쓰기 공백 수를 지정합니다.
         * @see https://prettier.io/docs/en/options.html#tab-width
         */
        tabWidth: 2,
        /**
         * @description 여러 줄의 쉼표로 구분된 구문 구조에서 가능하면 후행 쉼표를 인쇄합니다.(ex none 일경우 인쇄하지 않음)
         * @see https://prettier.io/docs/en/options.html#trailing-commas
         */
        trailingComma: 'none',
        /**
         * @description 문장의 끝에 세미콜론을 인쇄합니다.
         * @see https://prettier.io/docs/en/options.html#semicolons
         */
        semi: true,
        /**
         * @description 큰따옴표 대신 작은따옴표를 사용함(true일 경우)
         * @see https://prettier.io/docs/en/options.html#quotes
         */
        singleQuote: true,
        /**
         * @description 유일한 화살표 함수 매개변수 주위에 괄호를 포함합니다.(avoid일 경우 포함하지 않음)
         * @see https://prettier.io/docs/en/options.html#arrow-function-parentheses
         */
        arrowParens: 'avoid'
      }
    ]
  }
};
