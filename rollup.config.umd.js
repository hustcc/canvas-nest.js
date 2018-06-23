/**
 * Created by hustcc on 18/6/23.
 * Contract: i@hust.cc
 */

import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/canvas-nest.umd.js',
    name: 'CanvasNest',
    format: 'umd',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    uglify({
      output: { comments: false },
      compress: { warnings: false }
    }),
  ],
  external: [],
};
