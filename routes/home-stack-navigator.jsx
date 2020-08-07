import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../components/home-page";
import ReviewDetailPage from "../components/review-detail-page";
import ToolBar from "../_commons/toolbar";

const { Navigator, Screen } = createStackNavigator();

export const HomeStackNavigator = () => (
  <Navigator
    initialRouteName="home"
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
      name="home"
      component={HomePage}
      options={{
        headerTitle: (props) => <ToolBar {...props} />,
      }}
    />
    <Screen
      name="review-detail"
      component={ReviewDetailPage}
      options={{ title: "Review Detail" }}
    />
  </Navigator>
);