import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const SkillCard = ({ skill }) => {
  const { name, logo, description } = skill;

  return (
    <View style={styles.card}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.skillName}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const SkillScreen = () => {
  const skills = [
    {
      name: "Python",
      logo: require("./assets/images/profile_image.jpg"),
      description:
        "Python is a versatile programming language known for its simplicity...",
    },
    // Add more skills here in the same format
    {
      name: "Docker",
      logo: require("./assets/images/profile_image.jpg"),
      description:
        "Docker is a containerization application which bundles your application wiht required dependencies.",
    },
    {
      name: "Test",
      logo: require("./assets/images/profile_image.jpg"),
      description: "hjsdoijhsdoijjojoiasdjoad",
    },
    {
      name: "Test",
      logo: require("./assets/images/profile_image.jpg"),
      description: "hjsdoijhsdoijjojoiasdjoad",
    },
    {
      name: "Test",
      logo: require("./assets/images/profile_image.jpg"),
      description: "hjsdoijhsdoijjojoiasdjoad",
    },
    {
      name: "Test",
      logo: require("./assets/images/profile_image.jpg"),
      description: "hjsdoijhsdoijjojoiasdjoad",
    },
    {
      name: "Test",
      logo: require("./assets/images/profile_image.jpg"),
      description: "hjsdoijhsdoijjojoiasdjoad",
    },
  ];
  const renderSkillCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.logo} style={styles.logo} />
      <Text style={styles.skillName}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
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
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: 150, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10,
  },
  skillName: {
    fontSize: 16,
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
