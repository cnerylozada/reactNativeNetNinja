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
import * as Yup from "yup";

const ModalForm = ({ isModalVisible, setVisibility, addNewGameTitle }) => {
  const gameForm = {
    title: "",
    detail: "",
    rating: "",
  };

  const gameFormSchema = Yup.object().shape({
    title: Yup.string().required().min(5),
    detail: Yup.string().required().min(10),
    rating: Yup.number().integer().required().min(1).max(5),
  });

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
            <Formik
              initialValues={gameForm}
              validationSchema={gameFormSchema}
              onSubmit={saveGameForm}
            >
              {({
                handleChange,
                values,
                handleSubmit,
                errors,
                touched,
                setFieldTouched,
              }) => {
                const inputProps = {
                  values,
                  handleChange,
                  errors,
                  touched,
                  setFieldTouched,
                };
                return (
                  <>
                    <CustomInput
                      name="title"
                      placeholder="Review title"
                      inputProps={inputProps}
                    />
                    <CustomInput
                      name="detail"
                      placeholder="Review details"
                      inputProps={inputProps}
                    />
                    <CustomInput
                      name="rating"
                      placeholder="Rating (1 -5)"
                      keyboardType="numeric"
                      inputProps={inputProps}
                    />
                    <TouchableOpacity onPress={handleSubmit}>
                      <CustomButton title="submit" />
                    </TouchableOpacity>
                  </>
                );
              }}
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
