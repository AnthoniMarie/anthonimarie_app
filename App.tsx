import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Config from 'react-native-config'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
//Notifications
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
// Firebase linkage imports
import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

// Firebase Initialization
const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  databaseURL: Config.DATABASE_URL,
  projectId: Config.PROJECT_ID,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MESSAGING_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const registerForPushNotifications = async () => { 
  try {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) return;
    const token = await Notifications.getExpoPushTokenAsync();
    var updates = {}
    var key = firebase.database().ref('/contacts').push().key
    //firebase.auth().signInAnonymously();

    firebase.database().ref('/contacts').child(key).set({ push_token: token })
    console.log(token);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log(user.uid);
      }
    });
    } catch (error) {
    console.log('An error has occured while trying to get our beautiful push token...', error);
  }
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    registerForPushNotifications();
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
