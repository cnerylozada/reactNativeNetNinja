import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import CustomButton from "../_commons/custom-button";
import CustomInput from "../_commons/custom-input";
import { Formik } from "formik";

const ModalForm = ({ isModalVisible, setVisibility, addNewGameTitle }) => {
  const gameForm = {
    title: "",
    detail: "",
    rating: "",
  };

  const saveGameForm = (value, actions) => {
    addNewGameTitle(value);
    actions.resetForm();
    setVisibility(false);
  };
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[globalStyles.content]}>
          <Text style={{ marginVertical: 30, textAlign: "center" }}>
            <FontAwesome
              name="window-close"
              size={30}
              style={styles.closeModalIcon}
              onPress={() => setVisibility(false)}
            />
          </Text>
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
                    name="detail"
                    value={values.detail}
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
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalForm;

const styles = StyleSheet.create({
  closeModalIcon: {
    color: "#273c75",
  },
});
