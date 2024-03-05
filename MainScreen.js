import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useState, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { useNavigation } from "@react-navigation/native";

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

  const resumeUri = require("./assets/resume/Resume_Prateek Shetty.pdf");
  const handleOpenResume = async () => {
    // Use Linking to open the resume file
    const supported = await Linking.canOpenURL(resumeUri);

    if (supported) {
      await Linking.openURL(resumeUri);
    } else {
      console.error("Don't know how to open URI: " + resumeUri);
    }
  };
  const navigation = useNavigation();
  const navigateToSkills = () => {
    navigation.navigate("Skills"); // Navigate to the Skills screen
  };

  // const navigateToResume = () => {
  //   navigation.navigate("Resume"); // Navigate to the Resume screen
  // };

  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/images/solid-color-image.jpeg")}
    >
      {/* <View style={header ? styles.header_active : styles.header_inactive}> */}

      <View style={styles.header}>
        <Text style={styles.linkText}>EXPERIENCE</Text>

        <TouchableOpacity onPress={handleOpenResume}>
          <Text style={styles.linkText}>RESUME</Text>
        </TouchableOpacity>
        <View style={styles.profile_name}>
          <Image
            style={styles.profile_image}
            source={require("./assets/images/self_profile_image.jpg")}
          ></Image>
          <Text adjustsFontSizeToFit style={styles.text_main_info}>
            Prateek Shetty
          </Text>
        </View>
        <TouchableOpacity onPress={navigateToSkills}>
          <Text style={styles.linkText}>SKILLS</Text>
        </TouchableOpacity>
        <Text style={styles.linkText}>ACHIEVEMENTS</Text>
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

      <View style={[styles.footer]}>
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
    alignItems: "center",
    position: "relative",
    flex: 1,
  },
  container: {
    // flexDirection: "row",
    width: "100%",
    height: "100%",
    flex: 1,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "space-between", // Pushes footer to the bottom
  },

  footer: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "black",
    bottom: 0,
    zIndex: 1,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },

  header: {
    alignSelf: "stretch",
    alignItems: "center",
    // backgroundColor: "black",
    zIndex: 1,
    position: "sticky",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16, // Adjust as needed
    paddingVertical: 8, // Adjust as needed
    marginBottom: 20, // Adjust as needed
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
    marginBottom: 0,
  },

  icons: {
    color: "white",
    margin: 10,
    fontSize: 20,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FB9038", // Replace with your text color
    marginRight: 10, // Adjust spacing between links
  },
  pdfContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: "100%",
  },
  profile_image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  profile_name: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  text_description: {
    color: "white",
    fontSize: 30,
    fontFamily: "Merriweather_BI",
    justifyContent: "center",
    alignItems: "center",
  },
  text_description2: {
    color: "#FB9038",
    fontSize: 40,
    fontFamily: "Merriweather_BI",
    justifyContent: "center",
    alignItems: "center",
  },
  text_description3: {
    color: "white",
    fontSize: 30,
    fontFamily: "Roboto-T",
    justifyContent: "center",
    alignItems: "center",
  },

  text_main_info: {
    color: "white",
    fontSize: 30,
  },
  view_description: {
    width: "75%",
    height: "100%",
    flex: 1,
    alignContent: "center",
    // backgroundColor: "black",
    // opacity: 0.8,
    zIndex: 1,
    padding: "10%",
  },
});

export default MainScreen;
