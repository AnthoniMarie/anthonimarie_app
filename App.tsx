import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const registerForPushNotifications = async () => { 
  try {
     const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
     if (!permission.granted) return;
     const token = await Notifications.getExpoPushTokenAsync();
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
