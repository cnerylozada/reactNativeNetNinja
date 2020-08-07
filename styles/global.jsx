import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  content: {
    padding: 15,
  },
  titleText: {
    fontFamily: "lato-bold",
    fontSize: 14,
  },
  subTitle: {
    fontFamily: "lato-regular",
  },
  paragraphText: {
    fontFamily: "lato-regular",
    fontSize: 13,
    textAlign: "justify",
    color: "#747d8c",
  },
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  }
});
