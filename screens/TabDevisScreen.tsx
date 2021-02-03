import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { WebView } from 'react-native-webview';
import LottieView from 'lottie-react-native';

export default class Devis extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Réaliser mon devis en ligne</Text>
        <Text style={styles.subtitle}>Arrive bientôt...</Text>
        {/* <LottieView imageAssetsFolder='lottie/images' source={require('../assets/images/13554-coole-robbe.json')} autoPlay loop /> */}
        <Image source={{ uri: 'https://s.anthoni-marie.fr/m_w/images/app/13554-coole-robbe.gif' }} style={styles.blog_img} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blog_img: {
    width: 1000,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});