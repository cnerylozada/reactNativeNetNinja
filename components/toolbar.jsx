import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

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
        <Text style={styles.textTitle}>Game Zone</Text>
      </View>
    </View>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#95a5a6",
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
  textTitle: {
    fontSize: 17,
    fontFamily: "lato-bold",
  },
});
