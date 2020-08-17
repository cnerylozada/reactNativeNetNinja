import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const CustomInput = ({ name, inputProps, ...rest }) => {
  const { handleChange, values, errors, handleBlur } = inputProps;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        {...rest}
      />
      {errors[name] && (
        <Text style={globalStyles.errorMessage}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default CustomInput;
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
  },
});
