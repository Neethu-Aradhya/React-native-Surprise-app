import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

//import Surprise from "../screens/surprise";
import Memories from "../screens/memories";
import Home from "../screens/home"

import Photo from "../screens/Profile"


const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
     <NavigationContainer>
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "memories") {
            iconName = focused ? "heart" : "heart-outline";
          }else if (route.name === "photo") {
            iconName = focused ? "camera" : "camera-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
      activeColor={"red"}
      inactiveColor={"gray"}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="memories" component={Memories} />
           <Tab.Screen name="photo" component={Photo} />
            
    </Tab.Navigator>
     </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "black",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default TabNavigator;
