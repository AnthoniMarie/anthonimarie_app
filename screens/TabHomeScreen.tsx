import * as React from 'react';
import { StyleSheet, Alert, Image, ScrollView } from 'react-native';
import * as StoreReview from 'expo-store-review';
import { WebView } from 'react-native-webview';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Button } from '../components/Themed';

export default function TabHomeScreen() {
  return (
    //<WebView source={{ uri: 'https://anthoni-marie.fr/contact' }} style={{ height: "100%", width: "100%"}} />
    // <ScrollView style={styles.scrollView} bouncesZoom={true} centerContent={true}>
    <View style={styles.container}>
        <Image source={require('../assets/images/pdp_anthonimarie_black.png')} style={styles.imagelogo} />
        <Text style={styles.title}>Accueil</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button onPress={() => Alert.alert("Bravo tu as cliqué bg")} title="Découvrir mes services" accessibilityLabel="Test" />
          {/* <EditScreenInfo path="/screens/TabHomeScreen.tsx" /> */}
      </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 10,
  },
  imagelogo: {
    position: 'absolute',
    top: 10,
    height: 50,
    width: 50,
  },
  title: {
    //height: 525,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '60%',
  },
});
