module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
