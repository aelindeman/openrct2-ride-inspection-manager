import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    format: 'iife',
    file: 'dist/ride-inspection-manager.js',
  },
  plugins: [typescript()],
};
