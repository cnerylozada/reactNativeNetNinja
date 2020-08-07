import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackNavigator } from "./home-stack-navigator";
import { AboutStackNavigator } from "./about-stack-navigator";

const { Navigator, Screen } = createDrawerNavigator();
export const RootDrawerNavigator = () => (
  <Navigator>
    <Screen name="Home" component={HomeStackNavigator} />
    <Screen name="About" component={AboutStackNavigator} />
  </Navigator>
);
