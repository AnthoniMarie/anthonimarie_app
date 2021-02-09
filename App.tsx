import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Platform } from 'react-native';

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

async function registerForPushNotificationsAsync() {
  let token;

  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  firebaseInteractions(token);
  return token;
}

function firebaseInteractions(expoPushToken) {
  var uid;

  firebase.auth().signInAnonymously();
  try {
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              uid = user.uid;
              firebase.database().ref('users/' + user.uid).set({
                  notif_token: expoPushToken,
              });
          }
      });
  } catch (error) {
      console.log('An error has occured (get token failed)', error);
  }
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  }, []);

  if (!isLoadingComplete)
    return null;
  else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
