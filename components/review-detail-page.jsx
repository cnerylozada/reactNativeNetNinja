import React from "react";
import { View, Text } from "react-native";
import ReviewDetail from "../_commons/review-detail";
import { globalStyles } from "../styles/global";
import { gamesTitle } from "../data/games-data";

const ReviewDetailPage = ({ route }) => {
  const { review } = route.params;
  return (
    <View style={[globalStyles.content]}>
      <ReviewDetail
        title={review.title}
        detail={review.detail}
        rating={review.rating}
      />
    </View>
  );
};

export default ReviewDetailPage;
