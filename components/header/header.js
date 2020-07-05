import React from "react";
import { View, Text } from "react-native";

const Header = () => {
  return (
    <View style={{ backgroundColor: "orange", padding: 15 }}>
      <Text style={{ textTransform: "uppercase", color: "white" }}>
        My targets
      </Text>
    </View>
  );
};

export default Header;
