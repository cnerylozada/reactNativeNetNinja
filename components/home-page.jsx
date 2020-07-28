import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import ItemList from "./item-list";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

const gamesTitle = [
  "Zelda, Breath of Fresh Air",
  "Gotta Catch Them All (again)",
  "Not So Final Fantasy",
];

const HomePage = () => {
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
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
