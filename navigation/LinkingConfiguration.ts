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
              TabContactScreen: 'two',
            },
          },
          Blog: {
            screens: {
              TabBlogScreen: 'one',
              TabBlogDetailsScreen: 'one',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
