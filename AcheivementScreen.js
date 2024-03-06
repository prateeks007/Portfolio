import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const AchievementScreen = () => {
  const achievements = [
    "Achievement 1: Description of achievement 1.",
    "Achievement 2: Description of achievement 2.",
    "Achievement 3: Description of achievement 3.",
    // Add more achievements as needed
  ];

  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/images/solid-color-image.jpeg")}
    >
      <View style={styles.mainContainer}>
        <View style={styles.viewDescription}>
          <Text style={styles.pageTitle}>My Achievements</Text>

          {/* Displaying achievements as a simple list */}
          {achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementItem}>
              <Text style={styles.achievementText}>{achievement}</Text>
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    position: "relative",
    flex: 1,
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingVertical: 40,
    alignItems: "center",
    padding: 20,
  },
  viewDescription: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FB9038",
    marginBottom: 20,
    textAlign: "center",
  },
  achievementItem: {
    marginVertical: 10,
  },
  achievementText: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default AchievementScreen;
