import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Rating from "./rating";

const ReviewDetail = ({ title, detail, rating }) => {
  return (
    <View style={styles.container}>
      <View style={styles.reviewDetail}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </View>
      <View style={styles.ratingSection}>
        <View style={{ marginRight: 10 }}>
          <Text style={{ textAlign: "center", fontFamily: "lato-regular" }}>
            GameZone rating:
          </Text>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  reviewDetail: {
    padding: 14,
    borderBottomWidth: 2,
    borderColor: "#ecf0f0",
  },
  title: {
    fontFamily: "lato-bold",
    fontSize: 14,
  },
  detail: {
    fontFamily: "lato-regular",
    color: "#747d8c",
  },
  ratingSection: {
    padding: 14,
    justifyContent: "center",
    flexDirection: "row",
  },
});
