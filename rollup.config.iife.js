/**
 * Created by hustcc on 18/6/23.
 * Contract: i@hust.cc
 */

import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/iife.js',
  output: {
    file: 'dist/canvas-nest.js',
    format: 'iife',
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
