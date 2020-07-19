import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const ToolBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <SimpleLineIcons name="menu" size={24} color="black" />
      </View>
      <View style={styles.titleContainer}>
        <SimpleLineIcons name="game-controller" size={24} color="black" />
        <Text style={styles.textTitle}>Game Zone</Text>
      </View>
    </View>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "pink",
  },
  titleContainer: {
    flexDirection: "row",
  },
  textTitle: {
    textTransform: "uppercase",
  },
});
