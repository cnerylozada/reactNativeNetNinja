import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ToolBar from "./components/toolbar";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ToolBar></ToolBar>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
