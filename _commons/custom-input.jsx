import React from "react";
import { StyleSheet, TextInput } from "react-native";

const CustomInput = ({ name, handleChange, ...rest }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={handleChange(name)}
      {...rest}
    />
  );
};

export default CustomInput;
const styles = StyleSheet.create({
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 25,
  },
});
