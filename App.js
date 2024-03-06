import MainScreen from "./MainScreen";
import SkillScreen from "./SkillScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import AchievementScreen from "./AcheivementScreen";

const Stack = createStackNavigator();

export default function App() {
  const [fonstLoaded1] = useFonts({
    Beautify: require("./assets/fonts/BeautifulPeoplePersonalUse-dE0g.ttf"),
    Agbalumo: require("./assets/fonts/BeautifulPeoplePersonalUse-dE0g.ttf"),
    Merriweather_BI: require("./assets/fonts/Merriweather-LightItalic.ttf"),
    Roboto_L: require("./assets/fonts/Roboto-Light.ttf"),
    Roboto_T: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Skills" component={SkillScreen} />
        <Stack.Screen name="Achievements" component={AchievementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
