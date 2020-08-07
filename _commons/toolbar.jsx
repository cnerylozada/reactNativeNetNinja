import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

const ToolBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.sideMenu}
        onPress={() => console.log("sidemenu pressed")}
      >
        <SimpleLineIcons name="menu" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <SimpleLineIcons
          style={styles.iconTitle}
          name="game-controller"
          size={20}
          color="blue"
        />
        <Text style={[globalStyles.toolBarTitle]}>Game Zone</Text>
      </View>
    </View>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "red",
  },
  sideMenu: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  titleContainer: {
    flexDirection: "row",
  },
  iconTitle: {
    marginRight: 15,
  },
});
