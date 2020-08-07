import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutPage from "../components/about-page";

const { Navigator, Screen } = createStackNavigator();

export const AboutStackNavigator = () => (
  <Navigator
    initialRouteName="about"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f9ca24",
      },
      headerTitleStyle: {
        fontSize: 17,
        fontFamily: "lato-bold",
      },
    }}
  >
    <Screen
      name="about"
      component={AboutPage}
      options={{ title: "About Game Zone" }}
    />
  </Navigator>
);
