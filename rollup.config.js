import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js'
  },
  plugins: [
    resolve(),
    css({
      output: 'bundle.css'
    }),
    html({
      attributes: {
        html: { lang: 'en' }
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        }
      ],
      publicPath: './',
      title: 'BlowApp'
    }),
    copy({
      targets: [
        {
          src: [ 'src/assets' ],
          dest: 'dist'
        }
      ]
    })
  ]
}
