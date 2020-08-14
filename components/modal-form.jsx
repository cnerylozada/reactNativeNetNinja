import React from "react";
import { Modal, View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import CustomButton from "../_commons/custom-button";

const ModalForm = ({ isModalVisible, setVisibility }) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={[globalStyles.content]}>
        <FontAwesome
          name="window-close"
          size={30}
          style={styles.closeModalIcon}
          onPress={() => setVisibility(false)}
        />
        <View>
          <TextInput placeholder="Review title" style={styles.input} />
          <TextInput placeholder="Review details" style={styles.input} />
          <TextInput placeholder="Rating (1 -5 5)" style={styles.input} />
          <CustomButton title="submit" />
        </View>
      </View>
    </Modal>
  );
};

export default ModalForm;

const styles = StyleSheet.create({
  closeModalIcon: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
    color: "#273c75",
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 25,
  },
});
