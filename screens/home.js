import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,Alert
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Surprise from "./surprise"
import Wish   from "./Wish"
import SwitchScreen from "./switch"

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
   // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 15 ,fontWeight:"bold"},
          tabBarItemStyle: { width: 130 ,marginTop:30,padding:20},
          tabBarStyle: { backgroundColor: '#21D927' },
        }}
      >
        <Tab.Screen name="surprise" component={Surprise} />
        <Tab.Screen name="wish" component={Wish} />
        <Tab.Screen name="Switch" component={SwitchScreen} />
      </Tab.Navigator>
 //  </NavigationContainer>
  );
}
