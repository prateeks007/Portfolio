import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const SkillScreen = () => {
  const skills = [
    {
      name: "Python",
      iconName: "python",
    },
    {
      name: "Docker",
      iconName: "docker",
    },
    {
      name: "Github Actions",
      iconName: "github",
    },
    {
      name: "Burp Suite",
      iconName: "bug",
    },
    {
      name: "CircleCI",
      iconName: "sync",
    },
    {
      name: "Jenkins",
      iconName: "jenkins",
    },
    {
      name: "Kubernetes",
      iconName: "cube",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const calculateCardSize = () => {
    // Calculate the width based on the screen width
    const screenWidth = Dimensions.get("window").width;
    // Calculate the card size based on the screen width and number of columns
    const cardSize = (screenWidth - 40) / 3 - 20; // Subtracting 40 for margins and 20 for card padding
    return cardSize; // Return the calculated card size
  };

  const renderSkillCard = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.card,
        { width: calculateCardSize(), height: calculateCardSize() },
        index === hoveredIndex && styles.hoveredCard,
      ]}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <View style={styles.card}>
        <Icon
          name={item.iconName}
          size={40}
          color="white"
          style={styles.logo}
        />
        <Text style={styles.skillName}>{item.name}</Text>
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
              keyExtractor={(item, index) => index.toString()}
              numColumns={3}
              contentContainerStyle={styles.container}
            />
          </View>
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
  maincontainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "10%",
    paddingHorizontal: "10%",
    maxWidth: "100%", // Ensure content does not exceed the screen width
  },
  text_description2: {
    color: "#FB9038",
    fontSize: 20,
    fontFamily: "Roboto-T",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  view_description: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    zIndex: 1,
    padding: "10%",
    maxWidth: "100%", // Ensure content does not exceed the screen width
  },
  card: {
    // borderRadius: "50%",

    margin: 10,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    transition: "transform 0.3s, backgroundColor 0.3s",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%", // Each card takes up 100% of the available space
  },
  hoveredCard: {
    transform: [{ scale: 1.05 }],
    // backgroundColor: "#FB9038",
    opacity: 0.7,
  },
  logo: {
    marginBottom: 5,
  },
  skillName: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
});

export default SkillScreen;
