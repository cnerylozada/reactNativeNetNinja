import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import CustomButton from "../_commons/custom-button";
import CustomInput from "../_commons/custom-input";
import { Formik } from "formik";

const ModalForm = ({ isModalVisible, setVisibility }) => {
  const gameForm = {
    title: "",
    details: "",
    rating: "",
  };

  const saveGameForm = (values) => console.log(values);
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
          <Formik initialValues={gameForm} onSubmit={saveGameForm}>
            {({ handleChange, values, handleSubmit }) => (
              <>
                <CustomInput
                  name="title"
                  value={values.title}
                  handleChange={handleChange}
                  placeholder="Review title"
                />
                <CustomInput
                  name="details"
                  value={values.details}
                  handleChange={handleChange}
                  placeholder="Review details"
                />
                <CustomInput
                  name="rating"
                  value={values.rating}
                  handleChange={handleChange}
                  placeholder="Rating (1 -5)"
                  keyboardType="numeric"
                />
                <TouchableOpacity onPress={handleSubmit}>
                  <CustomButton title="submit" />
                </TouchableOpacity>
              </>
            )}
          </Formik>
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
});
