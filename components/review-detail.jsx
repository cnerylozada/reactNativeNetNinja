import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ReviewDetail = ({ title, detail, rating }) => {
  return (
    <View style={styles.container}>
      <View style={styles.reviewDetail}>
        <Text style={styles.title}>{title}</Text>
        <Text>{detail}</Text>
      </View>
      <View style={styles.ratingSection}>
        <View style={{ marginRight: 10 }}>
          <Text style={{ textAlign: "center", fontFamily: "lato-regular" }}>
            GameZone rating:
          </Text>
        </View>
        <View>
          <AntDesign name="staro" size={20} color="blue" />
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
    fontSize: 12,
  },
  ratingSection: {
    padding: 14,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
});
