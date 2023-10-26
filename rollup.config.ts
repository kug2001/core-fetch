/**
 * Rollup Config
 */
import typescript from '@rollup/plugin-typescript';
// import pkg from './package.json' assert { type: 'json' };
/**
 * 디펜던시를 설치할 dist에 포함 할 수 있도록 하는 라이브러리
 */
import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
  input: 'src/index.ts',
  dir: 'dist',
  output: [
    {
      file: 'dist/coreFetch.js',
      format: 'cjs',
      minifyInternalExports: true,
      compact: true
    },
    {
      file: 'dist/coreFetch.min.js',
      format: 'es',
      minifyInternalExports: true,
      sourcemap: true,
      compact: true
    }
  ],
  // external: Object.keys(pkg.dependencies),
  plugins: [typescript({}), nodeResolve()]
};
