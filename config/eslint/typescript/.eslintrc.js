module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    /**
     * @description 사용하지 않는 변수를 허용하지 않습니다.
     * @see https://typescript-eslint.io/rules/no-unused-vars
     */
    '@typescript-eslint/no-unused-vars': 'warn',
    /**
     * @description type any를 허용하지 않습니다.
     * @see https://typescript-eslint.io/rules/no-explicit-any/
     */
    // '@typescript-eslint/no-explicit-any': 'error',
    /**
     * @description @ts-<directive> 주석을 허용하지 않거나 지시문 뒤에 설명을 요구합니다.
     * @see https://typescript-eslint.io/rules/ban-ts-comment/
     */
    '@typescript-eslint/ban-ts-comment': 'off'
  }
};
