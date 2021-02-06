import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

// Firebase Initialization
const firebaseConfig = {
  apiKey: 'AIzaSyBPVau-TMjJnLFMtb6liuGSAdSpZN3rFL8',
  authDomain: 'anthonimarieapp-af414.firebaseapp.com',
  databaseURL: 'https://anthonimarieapp-af414-default-rtdb.firebaseio.com/',
  projectId: 'anthonimarieapp-af414',
  storageBucket: 'anthonimarieapp-af414.appspot.com',
  messagingSenderId: '654775663112',
};

if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
else
  firebase.app();

const registerForPushNotifications = async () => { 
  try {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) return;
    const token = await Notifications.getExpoPushTokenAsync();

    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        firebase.database().ref('users/' + user.uid).set({notif_token: token,});
        console.log(user.uid);
      }
    });
    console.log(token);
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
