import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import ToolBar from "./components/toolbar";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const getLatoFont = () =>
  Font.loadAsync({
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);
  if (isFontLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <ToolBar></ToolBar>
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={getLatoFont}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
