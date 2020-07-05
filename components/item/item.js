import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Item = ({ content }) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={{ textTransform: "capitalize", fontSize: 15 }}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    backgroundColor: "pink",
    marginBottom: 15,
  },
});
