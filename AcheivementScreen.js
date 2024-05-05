import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const AchievementScreen = () => {
  const achievements = [
    {
      achievement: "Winner of NetApp Hackathon from PES University.",
      date: "OCT 2022",
    },
    {
      achievement:
        "One of the top 400 winners in Meta Global Hackathon out of 3000+ participants.",
      date: "SEP 2022",
    },
    {
      achievement:
        "Qualified for the prototyping round of Zoho Creator Build an App Challenge on Hackerearth.",
      date: "AUG 2022",
    },
    {
      achievement: "Cleared the qualification round of Google Code Jam.",
      date: "APR 2022",
    },
    {
      achievement:
        "Global Rank: 157 in February Long 2022 - II, Division 3 on Codechef.",
      date: "FEB 2022",
    },
    {
      achievement: "Successfully completed Hacktoberfest 2020.",
      date: "OCT 2022",
    },
    {
      achievement:
        "Led a team of 6 members and stood first among 30+ teams in an ideathon held by my university, for creating a simple prototype for a portable bottle capable of producing drinkable water on the go.",
      date: "AUG 2019",
    },
    {
      achievement:
        "TechnoSpark, SDIT, stood first among 200+ teams by leading a team of 4 members and developing a model to replace inefficient road transportation vehicles by a proposed electric vehicle thus reducing the loss per annum to a nation’s economy.",
      date: "JUL 2018",
    },
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
                <View style={styles.achievementContent}>
                  <Text style={styles.achievementText}>
                    {achievement.achievement}
                  </Text>
                  <Text style={styles.dateText}>{achievement.date}</Text>
                </View>
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
  achievementContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10, // Add padding horizontally between achievement and date
    marginBottom: 5, // Add margin vertically between achievements
  },
  achievementText: {
    flex: 1,
    fontSize: 20,
    textAlign: "justify",
    fontFamily: "Roboto-T",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    marginLeft: 10, // Add margin between achievement text and date
  },
});

export default AchievementScreen;
