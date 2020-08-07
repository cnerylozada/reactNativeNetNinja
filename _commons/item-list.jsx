import React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const ItemList = ({ textContent }) => {
  return (
    <View style={[globalStyles.shadowBox, styles.itemContainer]}>
      <Text style={styles.textContent}>{textContent}</Text>
    </View>
  );
};

export default ItemList;
const styles = StyleSheet.create({
  itemContainer: {
    padding: 18,
    backgroundColor: "#dff9fb",
    marginBottom: 16,
  },
  textContent: {
    fontFamily: "lato-bold",
    fontSize: 14,
  },
});
