import React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

const ItemList = ({ textContent }) => {
  return (
    <TouchableHighlight>
      <View style={styles.itemContainer}>
        <Text style={styles.textContent}>{textContent}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ItemList;
const styles = StyleSheet.create({
  itemContainer: {
    padding: 14,
    backgroundColor: "#ecf0f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 16,
  },
  textContent: {
    fontFamily: "lato-bold",
    fontSize: 14,
  },
});
