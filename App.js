import React, { useState } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  SafeAreaView,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
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
    if (newTarget.length > 3) {
      setTargets((prevTargets) => {
        return [
          { key: Math.random().toString(), target: newTarget },
          ...prevTargets,
        ];
      });
    } else {
      Alert.alert("Input error", "Todo task should has 3 chrs at least!", [
        {
          text: "Ok",
          onPress: () => console.log("ok button in alert was pressed"),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
