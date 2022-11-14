import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
  input: 'main.js',
  output: { dir: 'dist' },
  plugins: [
    resolve(),
    copy({
      targets: [
        {
          src: [ 'index.html', 'assets' ],
          dest: 'dist'
        }
      ]
    })
  ]
}
