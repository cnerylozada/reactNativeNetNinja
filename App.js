import React, { useState } from "react";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { getLatoFont } from "./utils/load-fonts";
import MainAppOutlet from "./routes/main-app-outlet";

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);
  if (isFontLoaded) {
    return (
      <NavigationContainer>
        <MainAppOutlet />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getLatoFont}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
}
