import React from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";
import ItemList from "../_commons/item-list";
import { MaterialIcons } from "@expo/vector-icons";

const gamesTitle = [
  "Zelda, Breath of Fresh Air",
  "Gotta Catch Them All (again)",
  "Not So Final Fantasy",
];

const HomePage = ({ navigation }) => {
  const goToReviewDetail = () => {
    navigation.navigate("review-detail");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginBottom: 30 }}>
        <MaterialIcons name="add-box" size={30} color="#273c75" />
      </TouchableOpacity>
      <View style={{ width: "100%" }}>
        {gamesTitle.map((_) => (
          <ItemList key={_} textContent={_} />
        ))}
      </View>
      <Button title="To review detail" onPress={goToReviewDetail}></Button>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
