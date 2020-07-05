import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { key: "1", name: "cristh" },
    { key: "2", name: "tatiana" },
    { key: "3", name: "lucciano" },
    { key: "4", name: "julieta" },
    { key: "5", name: "diana" },
    { key: "6", name: "lucia" },
    { key: "7", name: "josefina" },
    { key: "8", name: "gabriela" },
    { key: "9", name: "stephany" },
    { key: "10", name: "ana" },
    { key: "111", name: "esther" },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((_) => (
          <View key={_.key} style={styles.item}>
            <Text style={{ textTransform: "capitalize", fontSize: 20 }}>
              {_.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  item: {
    backgroundColor: "lightgray",
    marginBottom: 15,
    padding: 20,
  },
});
