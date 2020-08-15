import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const CustomButton = ({ title }) => {
  return (
    <View style={styles.button}>
      <Text style={[globalStyles.titleText, styles.title]}>{title}</Text>
    </View>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    backgroundColor: "#e17055",
    padding: 10,
  },
  title: {
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
  },
});
