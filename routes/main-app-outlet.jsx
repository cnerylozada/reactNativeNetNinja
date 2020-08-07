import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";
import { RootDrawerNavigator } from "./drawer-navigator";

const MainAppOutlet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.routerContent}>
        <RootDrawerNavigator />
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
  },
});
