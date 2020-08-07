import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";
import { RootDrawerNavigator } from "./drawer-navigator";
import { globalStyles } from "../styles/global";

const MainAppOutlet = () => {
  return (
    <SafeAreaView style={[globalStyles.toolBarPaddingTop, styles.container]}>
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
  },
  routerContent: {
    flex: 1,
  },
});
