import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

function MainScreen(props) {
  const navigation = useNavigation();

  const resumeUri = require("./assets/resume/Resume_Prateek Shetty.pdf");
  const handleOpenResume = async () => {
    const supported = await Linking.canOpenURL(resumeUri);
    if (supported) {
      await Linking.openURL(resumeUri);
    } else {
      console.error("Don't know how to open URI: " + resumeUri);
    }
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/images/solid-color-image.jpeg")}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigateTo("Experience")}>
            <Text style={styles.linkText}>EXPERIENCE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenResume}>
            <Text style={styles.linkText}>RESUME</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profile_name}>
          <Image
            style={styles.profile_image}
            source={require("./assets/images/self_profile_image.jpg")}
          />
          <Text adjustsFontSizeToFit style={styles.text_main_info}>
            Prateek Shetty
          </Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigateTo("Skills")}>
            <Text style={styles.linkText}>SKILLS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo("Achievements")}>
            <Text style={styles.linkText}>ACHIEVEMENTS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.view_description}>
          <Text style={styles.text_description}>Hey!!!</Text>
          <Text style={styles.text_description2}>Prateek here.</Text>
          <Text style={styles.text_description3}>
            I'm a 2023 Computer Science graduate from PES University. As a
            Junior DevOps Engineer, I blend code and infrastructure to build
            seamless solutions. Beyond tech, you'll find me on the football
            field, chasing goals and living the beautiful game.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <a
          style={styles.icons}
          target="_blank"
          href="https://linkedin.com/in/prateek-shetty-7375031a6/"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/prateeks007"
          style={styles.icons}
          target="_blank"
        >
          <AiFillGithub />
        </a>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    flexWrap: "wrap",
  },
  headerLeft: {
    flexDirection: windowWidth > 768 ? "row" : "column",
    alignItems: windowWidth > 768 ? "center" : "flex-start",
  },
  headerRight: {
    flexDirection: windowWidth > 768 ? "row" : "column",
    alignItems: windowWidth > 768 ? "center" : "flex-end",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
  },
  profile_image: {
    width: windowWidth > 768 ? 200 : 150,
    height: windowWidth > 768 ? 200 : 150,
    borderRadius: windowWidth > 768 ? 100 : 75,
  },
  profile_name: {
    alignItems: "center",
  },
  linkText: {
    fontSize: windowWidth > 768 ? 16 : 14,
    fontWeight: "bold",
    color: "#FB9038",
    marginVertical: 5,
    marginHorizontal: windowWidth > 768 ? 10 : 0,
  },
  text_main_info: {
    color: "white",
    fontSize: windowWidth > 768 ? 30 : 24,
    marginTop: 10,
  },
  view_description: {
    width: "75%",
    alignItems: "center",
  },
  text_description: {
    color: "white",
    fontSize: windowWidth > 768 ? 36 : 28,
    fontFamily: "Merriweather_BI",
    textAlign: "center",
  },
  text_description2: {
    color: "#FB9038",
    fontSize: windowWidth > 768 ? 48 : 38,
    fontFamily: "Merriweather_BI",
    textAlign: "center",
  },
  text_description3: {
    color: "white",
    fontSize: windowWidth > 768 ? 34 : 24,
    fontFamily: "Roboto-T",
    textAlign: "center",
    marginTop: 20,
  },
  icons: {
    color: "white",
    margin: 10,
    fontSize: 20,
  },
});

export default MainScreen;
