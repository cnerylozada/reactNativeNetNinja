import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GamesList from "./games-list";
import { globalStyles } from "../styles/global";
import ModalForm from "./modal-form";
import { gamesTitle } from "../data/games-data";

const HomePage = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listOfGames, setListOfGames] = useState(gamesTitle);

  const openModal = () => setIsModalVisible(true);
  const goToReviewDetail = (review) => {
    navigation.navigate("review-detail", {
      review: review,
    });
  };

  const addNewGameTitle = (game) => {
    const newGame = { ...game, id: `0000${listOfGames.length + 1}` };
    setListOfGames((games) => [newGame, ...games]);
  };

  return (
    <View style={[globalStyles.content, styles.container]}>
      <ModalForm
        isModalVisible={isModalVisible}
        setVisibility={setIsModalVisible}
        addNewGameTitle={addNewGameTitle}
      />
      <TouchableOpacity style={{ marginBottom: 30 }} onPress={openModal}>
        <MaterialIcons name="add-box" size={30} style={styles.openModalIcon} />
      </TouchableOpacity>
      <View style={styles.list}>
        <GamesList data={listOfGames} goToReviewDetail={goToReviewDetail} />
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
  openModalIcon: {
    color: "#273c75",
  },
});
