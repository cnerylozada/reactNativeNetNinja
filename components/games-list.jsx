import React from "react";
import { FlatList } from "react-native";
import gamesTitle from "../data/games-data";
import ItemList from "../_commons/item-list";

const GamesList = () => {
  return (
    <FlatList
      data={gamesTitle}
      renderItem={({ item }) => (
        <ItemList key={item.id} textContent={item.title} />
      )}
    />
  );
};

export default GamesList;
