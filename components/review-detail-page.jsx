import React from "react";
import { View, Text } from "react-native";
import ReviewDetail from "../_commons/review-detail";
import gamesTitle from "../data/games-data";

const ReviewDetailPage = ({ title, detail, rating }) => {
  const gameDefault = gamesTitle[0];
  return (
    <ReviewDetail
      title={gameDefault.title}
      detail={gameDefault.detail}
      rating={gameDefault.rating}
    />
  );
};

export default ReviewDetailPage;
