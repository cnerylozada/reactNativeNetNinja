import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";
import HomePage from "../components/home-page";
import ToolBar from "../components/toolbar";
import ReviewDetailPage from "../components/review-detail-page";

const { Navigator, Screen } = createStackNavigator();

export const HomeStackNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="home" component={HomePage} />
    <Screen name="review-detail" component={ReviewDetailPage} />
  </Navigator>
);

const MainAppOutlet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar />
      <View style={styles.routerContent}>
        <HomeStackNavigator />
      </View>
    </SafeAreaView>
  );
};

export default MainAppOutlet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  routerContent: {
    flex: 1,
    padding: 15,
  },
});
