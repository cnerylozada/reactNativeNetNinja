import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Rating from "./rating";
import { globalStyles } from "../styles/global";

const ReviewDetail = ({ title, detail, rating }) => {
  return (
    <View style={[globalStyles.shadowBox, styles.container]}>
      <View style={styles.reviewDetail}>
        <Text style={[globalStyles.titleText]}>{title}</Text>
        <Text style={[globalStyles.paragraphText]}>{detail}</Text>
      </View>
      <View style={styles.ratingSection}>
        <View style={{ marginRight: 10 }}>
          <Text style={[globalStyles.subTitleText]}>GameZone rating:</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Rating rating={rating} />
        </View>
      </View>
    </View>
  );
};

export default ReviewDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fa",
  },
  reviewDetail: {
    padding: 14,
    borderBottomWidth: 2,
    borderColor: "#ecf0f0",
  },
  ratingSection: {
    padding: 14,
    justifyContent: "center",
    flexDirection: "row",
  },
});
