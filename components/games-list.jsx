import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import ItemList from "../_commons/item-list";

const GamesList = ({ data, goToReviewDetail }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => goToReviewDetail(item)}>
          <ItemList key={item.id} textContent={item.title} />
        </TouchableOpacity>
      )}
    />
  );
};

export default GamesList;
