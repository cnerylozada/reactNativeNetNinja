import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Item = ({ content, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(content.key)}
    >
      <Text style={{ textTransform: "capitalize", fontSize: 15 }}>
        {content.target}
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
    borderRadius: 5,
  },
});
