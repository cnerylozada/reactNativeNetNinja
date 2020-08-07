import React from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GamesList from "./games-list";
import { globalStyles } from "../styles/global";
import ToolBar from "../_commons/toolbar";

const HomePage = ({ navigation }) => {
  const goToReviewDetail = (reviewId) => {
    navigation.navigate("review-detail", {
      id: reviewId,
    });
  };

  return (
    <View style={[globalStyles.content, styles.container]}>
      <TouchableOpacity style={{ marginBottom: 30 }}>
        <MaterialIcons name="add-box" size={30} color="#273c75" />
      </TouchableOpacity>
      <View style={styles.list}>
        <GamesList goToReviewDetail={goToReviewDetail} />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
});
