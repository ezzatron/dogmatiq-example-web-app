module.exports = {
  plugins: [
    '@loadable/babel-plugin',
    'transform-async-to-promises',
    'react-hot-loader/babel',
    [
      'module-resolver',
      {
        alias: {
          '~': '.'
        }
      }
    ]
  ],
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        corejs: 3,
        exclude: ['@babel/plugin-transform-regenerator'],
        modules: false,
        useBuiltIns: 'usage'
      }
    ]
  ]
}
