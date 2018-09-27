export default {
  title: "DevFest'18",
  themeConfig: {
    colors: {
      primary: "tomato"
    }
  },
  modifyBabelRc: (config) => ({
      ...config,
      presets: config.presets.slice(2),
  }),
  base: '/button',
};
