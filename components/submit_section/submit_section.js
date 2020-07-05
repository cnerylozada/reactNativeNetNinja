import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import CustomButton from "../custom_button/custom_button";

const SubmitSection = () => {
  const [target, setInput] = useState("");

  return (
    <View style={styles.submitSection}>
      <TextInput
        style={styles.inputContainer}
        value={target}
        onChangeText={(value) => setInput(value)}
        placeholder={"Enter a target ..."}
      />
      <CustomButton title="Add" />
    </View>
  );
};

export default SubmitSection;

const styles = StyleSheet.create({
  submitSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "75%",
  },
});
