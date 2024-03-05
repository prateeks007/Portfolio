import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const SkillScreen = () => {
  const skills = [
    {
      name: "Python",
      logo: require("./assets/images/profile_image.jpg"),
    },
    // Add more skills here in the same format
    {
      name: "Docker",
      logo: require("./assets/images/profile_image.jpg"),
    },
    {
      name: "Github Actions",
      logo: require("./assets/images/profile_image.jpg"),
    },
    {
      name: "Burp Suite",
      logo: require("./assets/images/profile_image.jpg"),
    },
    {
      name: "CircleCI",
      logo: require("./assets/images/profile_image.jpg"),
    },
    {
      name: "Jenkins",
      logo: require("./assets/images/profile_image.jpg"),
    },
    {
      name: "Kubernetes",
      logo: require("./assets/images/profile_image.jpg"),
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const renderSkillCard = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.card, index === hoveredIndex && styles.hoveredCard]}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <View style={styles.card}>
        <Image source={item.logo} style={styles.logo} />
        <Text style={styles.skillName}>{item.name}</Text>
        {/* <Text style={styles.description}>{item.description}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/images/solid-color-image.jpeg")}
    >
      <View style={styles.maincontainer}>
        <View style={styles.view_description}>
          <Text style={styles.text_description2}>
            Welcome to my skills page! Here, I'm sharing my ongoing journey of
            learning and mastering various skills. This space is constantly
            evolving as I explore new domains and enhance my expertise. Stay
            tuned for the latest updates!
          </Text>
          {/* Displaying skills here */}
          <View>
            <FlatList
              data={skills}
              renderItem={renderSkillCard}
              keyExtractor={(item) => item.id}
              numColumns={3}
              contentContainerStyle={styles.container}
            />
          </View>
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
};

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    position: "relative",
    flex: 1,
  },
  maincontainer: {
    // flexDirection: "row",
    width: "100%",
    height: "100%",
    flex: 1,
    paddingVertical: 20,
    // backgroundColor: "#f0f0f0",
    alignItems: "center",

    padding: 20,

    //     justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center", // Aligns rows of cards vertically
    alignItems: "center", // Aligns cards horizontally
    paddingVertical: 20,
    paddingHorizontal: 10,
    // backgroundColor: "yellow",
  },
  text_description2: {
    color: "#FB9038",
    fontSize: 20,
    fontFamily: "Roboto-T",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
  icons: {
    color: "white",
    margin: 10,
    fontSize: 20,
  },
  view_description: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignContent: "center",
    // backgroundColor: "black",
    // opacity: 0.8,
    justifyContent: "center",

    zIndex: 1,
    padding: "10%",
  },

  card: {
    overflow: "hidden",
    borderRadius: 200,
    width: 300,
    height: 300,
    margin: 10,
    backgroundColor: "transparent",
    shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    shadowOpacity: 0.2,
    // shadowRadius: 5,
    transition: "transform 0.3s, backgroundColor 0.3s", // Smooth transition on hover
  },
  hoveredCard: {
    transform: [{ scale: 1.05 }], // Slightly scale up on hover
    backgroundColor: "#FB9038", // Set the hover color to #FB9038
    opacity: 0.7,
  },
  cardWrapper: {
    margin: 10,
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  skillName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: "justify",
  },
});
export default SkillScreen;
