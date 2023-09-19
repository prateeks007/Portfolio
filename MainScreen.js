import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
} from "react-native";
import { useState } from "react";

function MainScreen(props) {
  const [header, setHeader] = useState(false);
  const changeOpacity = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeOpacity);

  return (
    <ImageBackground
      style={styles.background}
      source={require("/assets/images/background3.jpg")}
    >
      <View style={header ? styles.header_active : styles.header_inactive}>
        <Image
          style={styles.profile_image}
          source={require("/assets/images/background.jpg")}
        ></Image>
        <Text style={styles.text_main_info}>Prateek Shetty</Text>
      </View>
      <View style={{ gap: 75 }}>
        <View />
        <View />
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    position: "relative",
    flex: 1,
  },

  header_active: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  header_inactive: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    position: "sticky",
    top: 0,
    zIndex: 1,
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
    opacity: 0.8,
    margin: 20,
  },
});

export default MainScreen;
