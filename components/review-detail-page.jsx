import React from "react";
import { View, Text } from "react-native";
import ReviewDetail from "../_commons/review-detail";
import gamesTitle from "../data/games-data";

const ReviewDetailPage = ({ route }) => {
  const { id } = route.params;
  const gameDefault = gamesTitle.find((_) => _.id === id);
  return (
    <ReviewDetail
      title={gameDefault.title}
      detail={gameDefault.detail}
      rating={gameDefault.rating}
    />
  );
};

export default ReviewDetailPage;
