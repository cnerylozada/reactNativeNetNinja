import * as Font from "expo-font";

export const getLatoFont = () =>
  Font.loadAsync({
    "lato-bold": require("../assets/fonts/Lato-Bold.ttf"),
    "lato-regular": require("../assets/fonts/Lato-Regular.ttf"),
  });
