// https://medium.com/mtholla/react-native-how-to-use-svgs-193e384e1d1b
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// eslint-disable-next-line no-undef
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      }
    })
  }
}

// const { getDefaultConfig } = require("metro-config")

// module.exports = (async () => {
//   const {
//     resolver: {
//       sourceExts,
//       assetExts
//     }
//   } = await getDefaultConfig()

//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-svg-transformer"),
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: true
//         }
//       })
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== "svg"),
//       sourceExts: [...sourceExts, "svg"]
//     }
//   };
// })()
