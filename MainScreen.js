import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import Footer from "./footer";

function MainScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("/assets/images/background3.jpg")}
    >
      <View style={[styles.main_info]}>
        <Image
          style={styles.profile_image}
          source={require("/assets/images/background.jpg")}
        ></Image>
        <Text style={styles.text_main_info}>Prateek Shetty</Text>
      </View>

      <View style={styles.view_description}>
        <Text style={styles.text_description}>
          Heyyy!! I am Prateek Shetty, a 2023 CSE graduate from PES University.
          I am currently working as a Junior Devops Engineer in EOX Vantage.
        </Text>
      </View>
      <View style={styles.view_description}>
        <Text style={styles.text_description}>Skills</Text>
      </View>
      <View style={styles.view_description}>
        <Text style={styles.text_description}>Projects</Text>
      </View>
      <View style={styles.view_description}>
        <Text style={styles.text_description}>Achievements</Text>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    position: "relative",
    flex: 1,
  },
  footer: {
    alignSelf: "stretch",
    alignContent: "center",
    backgroundColor: "black",
    opacity: 0.7,
  },

  main_info: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
    position: "sticky",
    top: 0,
  },
  profile_image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  text_description: {
    color: "white",
    fontSize: 20,
    flex: 0.5,
    padding: 50,
  },
  text_main_info: {
    color: "white",
    fontSize: 30,
  },
  view_description: {
    width: "75%",
    height: 400,
    borderRadius: 50 / 2,
    alignContent: "center",
    backgroundColor: "black",
    opacity: 0.5,
  },
});

export default MainScreen;
