import React from "react";
import { View, Text } from "react-native";
import ReviewDetail from "../_commons/review-detail";

const ReviewDetailPage = () => {
  return (
    <View>
      <Text style={{ fontFamily: "lato-bold", marginBottom: 10 }}>
        Review Detail Page
      </Text>
      <ReviewDetail
        title="Zelda, Breth of Fresh Air"
        detail="lorem ipsum"
        rating="3"
      />
    </View>
  );
};

export default ReviewDetailPage;
