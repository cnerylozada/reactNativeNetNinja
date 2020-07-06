import React, { useState } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  SafeAreaView,
  View,
} from "react-native";
import { targets as groupOfTargets } from "./data/target";
import Item from "./components/item/item";
import SubmitSection from "./components/submit_section/submit_section";
import Header from "./components/header/header";

export default function App() {
  const [targets, setTargets] = useState(groupOfTargets);

  const filterHandler = (targetKey) => {
    setTargets((prevTargets) => {
      return prevTargets.filter((_) => _.key !== targetKey);
    });
  };

  const addNewTarget = (newTarget) => {
    setTargets((prevTargets) => {
      return [
        { key: Math.random().toString(), target: newTarget },
        ...prevTargets,
      ];
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <View style={{ paddingHorizontal: 15, marginTop: 5 }}>
        <SubmitSection onAdd={addNewTarget} />
        <FlatList
          data={targets}
          renderItem={({ item }) => (
            <Item onPress={filterHandler} content={item} />
          )}
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
