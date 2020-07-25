import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutPage = () => {
  return (
    <View>
      <View style={styles.mainSection}>
        <Text style={styles.pageTitle}>About Page</Text>
      </View>
      <View>
        <Text style={styles.pageContent}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </View>
  );
};

export default AboutPage;
const styles = StyleSheet.create({
  mainSection: {
    marginBottom: 10,
  },
  pageTitle: {
    fontFamily: "lato-bold",
    fontSize: 16,
  },
  pageContent: {
    fontFamily: "lato-regular",
    fontSize: 13,
    textAlign: "justify",
    color: "#747d8c",
  },
});
