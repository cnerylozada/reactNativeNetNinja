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
import Header from "./components/header/header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <View style={{ paddingHorizontal: 15, marginTop: 5 }}>
        <SubmitSection />
        <FlatList
          data={targets}
          renderItem={({ item }) => <Item content={item.target} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
