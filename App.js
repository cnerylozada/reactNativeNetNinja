import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  SafeAreaView,
  View,
} from "react-native";
import { targets } from "./data/target";
import Item from "./components/item/item";
import SubmitSection from "./components/submit_section/submit_section";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SubmitSection />
      <FlatList
        data={targets}
        renderItem={({ item }) => <Item content={item.target} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
});
