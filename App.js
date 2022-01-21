import * as React from "react";


import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Gift from "./screens/Gift"
import Surprise from "./screens/surprise"
import TabNavigator from "./navigation/TabNavigator"

const AppSwitchNavigator = createSwitchNavigator({
  Gift: Gift,
TabNavigator:TabNavigator

});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}