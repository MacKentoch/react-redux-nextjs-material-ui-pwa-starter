// @flow

const AppConfig = {
  // flag: set fetch mock or real fetch
  DEV_MODE: true,

  // API
  api: {
    fakeEndPoint: 'api/somewhere'
  },

  // navigation
  navigation: {
    sidemenu: [
      { label: 'Home', link: '/' },
      { label: 'Protected', link: '/protected' },
      { label: 'About', link: '/about' }
    ]
  }
};

export default AppConfig;
