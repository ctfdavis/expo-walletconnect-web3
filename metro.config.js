module.exports = {
  resolver: {
    extraNodeModules: {...require("expo-crypto-polyfills"), ...require("node-libs-browser")},
  },
};
