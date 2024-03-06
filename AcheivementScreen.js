import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const AchievementScreen = () => {
  const achievements = [
    "Achievement 1: Description of achievement 1.",
    "Achievement 2: Description of achievement 2.",
    "Achievement 3: Description of achievement 3.",
    // Add more achievements as needed
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
            <TouchableOpacity
              key={index}
              onPress={() => {}}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <View
                style={[
                  styles.achievementItem,
                  index === hoveredIndex && styles.highlightedItem,
                ]}
              >
                <Text style={styles.achievementText}>{achievement}</Text>
              </View>
            </TouchableOpacity>
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
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
    transition: "transform 0.3s, backgroundColor 0.3s", // Smooth transition on hover
  },
  highlightedItem: {
    backgroundColor: "#FB9038", // Highlight color
    transform: [{ scale: 1.05 }],
    opacity: 0.7,
  },
  achievementText: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default AchievementScreen;
