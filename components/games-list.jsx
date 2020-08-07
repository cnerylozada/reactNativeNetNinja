import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import ItemList from "../_commons/item-list";
import { gamesTitle } from "../data/games-data";

const GamesList = ({ goToReviewDetail }) => {
  return (
    <FlatList
      data={gamesTitle}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => goToReviewDetail(item.id)}>
          <ItemList key={item.id} textContent={item.title} />
        </TouchableOpacity>
      )}
    />
  );
};

export default GamesList;
