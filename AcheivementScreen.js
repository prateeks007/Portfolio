import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

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
      date: "OCT 2020",
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

  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/images/solid-color-image.jpeg")}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Achievements</Text>
        {achievements.map((item, index) => (
          <View key={index} style={styles.achievementCard}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.achievementText}>{item.achievement}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: windowWidth > 600 ? 24 : 16,
  },
  header: {
    fontSize: windowWidth > 600 ? 32 : 28,
    fontWeight: "bold",
    color: "#FB9038",
    marginBottom: 28,
    textAlign: "center",
    fontFamily: "Roboto-T", // Changed from 'Merriweather_BI' to 'Roboto-T'
  },
  achievementCard: {
    backgroundColor: "rgba(40, 44, 52, 0.9)",
    borderRadius: 16,
    padding: windowWidth > 600 ? 24 : 20,
    marginBottom: 24,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  date: {
    fontSize: windowWidth > 600 ? 18 : 16,
    fontWeight: "bold",
    color: "#FB9038",
    marginBottom: 12,
    fontFamily: "Roboto-L",
  },
  achievementText: {
    fontSize: windowWidth > 600 ? 20 : 18,
    color: "#E0E0E0",
    fontFamily: "Roboto-L",
    lineHeight: windowWidth > 600 ? 28 : 26,
  },
});

export default AchievementScreen;
