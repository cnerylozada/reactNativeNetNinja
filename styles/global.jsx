import { StyleSheet, Platform, StatusBar } from "react-native";

export const globalStyles = StyleSheet.create({
  toolBarPaddingTop: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    padding: 15,
  },
  toolBarTitle: {
    fontSize: 17,
    fontFamily: "lato-bold",
  },
  titleText: {
    fontFamily: "lato-bold",
    fontSize: 14,
  },
  subTitleText: {
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
  },
  errorMessage: {
    marginTop: 5,
    textTransform: "capitalize",
    fontFamily: "lato-regular",
    fontSize: 13,
    color: "red",
  },
});
