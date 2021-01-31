import * as React from 'react';
import { StyleSheet, Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Button } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button onPress={() => Alert.alert('Bravo mon ptit')} title="Test" color="#841584" accessibilityLabel="Test"/>
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    height: 525,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '60%',
  },
});
