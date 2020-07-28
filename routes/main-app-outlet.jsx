import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";
import HomePage from "../components/home-page";
import ToolBar from "../components/toolbar";

const { Navigator, Screen } = createStackNavigator();

export const HomeStackNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={HomePage} />
  </Navigator>
);

const MainAppOutlet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar />
      <View style={{ padding: 15, flex: 1 }}>
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
});
