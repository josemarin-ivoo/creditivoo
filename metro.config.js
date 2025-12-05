const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;
const config = {
  resolver: {
    sourceExts: [...sourceExts, 'cjs', 'jsx'], //add here
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
