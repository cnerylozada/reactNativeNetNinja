import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [person, setPerson] = useState({ name: "cristh", age: "26" });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <TextInput
          style={styles.input}
          value={person.name}
          onChangeText={(value) => setPerson({ ...person, name: value })}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={person.age}
          onChangeText={(value) => setPerson({ ...person, age: value })}
        />
        <Text>My new name is: {person.name}</Text>
        <Text>My new age is: {person.age}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
  input: {
    padding: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
});
