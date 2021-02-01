import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Accueil: {
            screens: {
              TabHomeScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Blog: {
            screens: {
              TabBlogScreen: 'one',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
