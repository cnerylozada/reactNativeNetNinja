import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import ToolBar from "./components/toolbar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar></ToolBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
