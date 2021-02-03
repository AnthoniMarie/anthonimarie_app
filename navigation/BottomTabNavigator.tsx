import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabContactScreen from '../screens/TabContactScreen';
import TabBlogScreen from '../screens/TabBlogScreen';
import TabBlogDetailsScreen from '../screens/TabBlogDetailsScreen';

import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabBlogParamList, TabDevisParamList} from '../types';
import TabDevisScreen from '../screens/TabDevisScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Accueil"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Accueil"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Blog"
        component={TabBlogNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-newspaper" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Devis en ligne"
        component={TabDevisNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-construct-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Contacter"
        component={TabContactNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="rocket-sharp" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={{ headerTitle: 'Bienvenue sur mon App !' }}
      />
    </TabHomeStack.Navigator>
  );
}
const TabBlogStack = createStackNavigator<TabBlogParamList>();
const TabBlogDetailsStack = createStackNavigator<TabBlogParamList>();

function TabBlogNavigator() {
  return (
    <TabBlogStack.Navigator>
      <TabBlogStack.Screen
        name="TabBlogScreen"
        component={TabBlogScreen}
        options={{ headerTitle: 'Le Blog !' }}
      />
      <TabBlogDetailsStack.Screen
        name="TabBlogDetailsScreen"
        component={TabBlogDetailsScreen}
        options={{ headerTitle: 'Le Blog ! - Détails', headerBackTitle: "Retour"}}
      />
    </TabBlogStack.Navigator>
  );
}

const TabContactStack = createStackNavigator<TabContactParamList>();

function TabContactNavigator() {
  return (
    <TabContactStack.Navigator>
      <TabContactStack.Screen
        name="TabContactScreen"
        component={TabContactScreen}
        options={{ headerTitle: 'Anthoni Marie - Contact' }}
      />
    </TabContactStack.Navigator>
  );
}

const TabDevisStack = createStackNavigator<TabDevisParamList>();

function TabDevisNavigator() {
  return (
    <TabDevisStack.Navigator>
      <TabDevisStack.Screen
        name="TabDevisScreen"
        component={TabDevisScreen}
        options={{ headerTitle: 'Anthoni Marie - Contact' }}
      />
    </TabDevisStack.Navigator>
  );
}
