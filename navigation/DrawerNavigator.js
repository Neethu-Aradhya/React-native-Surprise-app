import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from "./TabNavigator";

import Home from "../screens/home"
import Profile from "../screens/Profile";
import Gift from "../screens/Gift"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="pro" component={Profile} />
        <Drawer.Screen name="gift" component={Gift} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}