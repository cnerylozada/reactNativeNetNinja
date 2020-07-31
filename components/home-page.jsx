import React from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GamesList from "./games-list";

const HomePage = ({ navigation }) => {
  const goToReviewDetail = () => {
    navigation.navigate("review-detail");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginBottom: 30 }}>
        <MaterialIcons name="add-box" size={30} color="#273c75" />
      </TouchableOpacity>
      <Button title="review_detail" onPress={goToReviewDetail}></Button>
      <View style={{ width: "100%" }}>
        <GamesList />
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
});
