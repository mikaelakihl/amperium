export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['src/styles/tokens/breakpoint-tokens.css'],
    },
    'postcss-custom-media': {},
  },
};
