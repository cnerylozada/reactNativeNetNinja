import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, dataToSubmit, onAdd }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => onAdd(dataToSubmit)}
    >
      <Text style={{ color: "white", textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "orange",
    borderRadius: 15,
  },
});
