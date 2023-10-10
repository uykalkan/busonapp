module.exports = {
  packagerConfig: {
    asar: true,
    appBundleId: "com.cdhistanbul.buson",
    osxSign: {
      identity: "Developer ID Application: Cdh Istanbul (K4F5HUK7T6)",
      "hardened-runtime": true,
      entitlements: "entitlements.plistx",
      "entitlements-inherit": "entitlements.plistx",
      "signature-flags": "library",
      "gatekeeper-assess": false,
      verbose: true,
    },
    osxNotarize: {
      tool: "notarytool",
      appleId: "developer@cdhistanbul.com",
      appleIdPassword: "scma-temh-rlyb-sldh",
      teamId: "K4F5HUK7T6",
    },
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
