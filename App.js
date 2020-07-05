import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { targets } from "./data/target";
import Item from "./components/item/item";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        data={targets}
        renderItem={({ item }) => <Item content={item.target} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
});
