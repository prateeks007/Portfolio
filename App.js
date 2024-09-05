import React, { useState } from "react";
import { View } from "react-native";
import MainScreen from "./MainScreen";
import SkillScreen from "./SkillScreen";
import Popup from "./Popup";
import AchievementScreen from "./AcheivementScreen";
import ExperienceScreen from "./ExperienceScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function App() {
  const [fonstLoaded1] = useFonts({
    Beautify: require("./assets/fonts/BeautifulPeoplePersonalUse-dE0g.ttf"),
    Agbalumo: require("./assets/fonts/BeautifulPeoplePersonalUse-dE0g.ttf"),
    Merriweather_BI: require("./assets/fonts/Merriweather-LightItalic.ttf"),
    Roboto_L: require("./assets/fonts/Roboto-Light.ttf"),
    Roboto_T: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  // State to control the visibility of the popup
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  if (!fonstLoaded1) {
    return null; // Return null until fonts are loaded
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Skills" component={SkillScreen} />
          <Stack.Screen name="Achievements" component={AchievementScreen} />
          <Stack.Screen name="Experience" component={ExperienceScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* Conditionally render the popup */}
      {isPopupVisible && (
        <Popup
          onClose={() => setIsPopupVisible(false)} // Close the popup when the user acknowledges it
        />
      )}
    </View>
  );
}
