import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { WebView } from 'react-native-webview';
export default class Contact extends React.Component<any, any> {
  render() {
    return (
      //<WebView source={{ uri: 'https://anthoni-marie.fr/contact' }} style={{ height: "100%", width: "100%"}} />
      <View style={styles.container}>
        <Text style={styles.title}>Me contacter</Text>
        <Text style={styles.titlesecond}>Proposez moi des sujets pour mes prochains articles !</Text>
        <Text style={styles.subtitle}>Email : contact@anthoni-marie.fr</Text>
        <Image source={{ uri: 'https://s.anthoni-marie.fr/m_w/images/app/cool-man.gif' }} style={styles.blog_img} />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titlesecond: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  blog_img: {
    width: 1000,
    height: 200,
    resizeMode: 'contain',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
