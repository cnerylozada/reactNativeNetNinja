import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Item = ({ content, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(content.key)}
    >
      <Text style={{ textTransform: "capitalize", fontSize: 15 }}>
        {content.target}
      </Text>
      <Ionicons name="ios-trash" size={20}/>
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
