import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const SkillItem = ({ skill }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedScale = new Animated.Value(1);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    Animated.spring(animatedScale, {
      toValue: isExpanded ? 1 : 1.1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity onPress={toggleExpand} style={styles.skillItem}>
      <Animated.View
        style={[
          styles.iconContainer,
          { transform: [{ scale: animatedScale }] },
        ]}
      >
        <Icon name={skill.icon} size={40} color={skill.color} />
      </Animated.View>
      <Text style={styles.skillName}>{skill.name}</Text>
      {isExpanded && skill.description && (
        <Text style={styles.skillDescription}>{skill.description}</Text>
      )}
    </TouchableOpacity>
  );
};

const SkillScreen = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "Python",
          icon: "python",
          color: "#3776AB",
          description:
            "Proficient in Python for web development and scripting.",
        },
        {
          name: "JavaScript",
          icon: "js-square",
          color: "#F7DF1E",
          description:
            "Experienced in both frontend and backend JavaScript development.",
        },
        {
          name: "Ruby",
          icon: "gem",
          color: "#CC342D",
          description: "Familiar with Ruby for web applications.",
        },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        {
          name: "React",
          icon: "react",
          color: "#61DAFB",
          description:
            "Skilled in building responsive and interactive UIs with React.",
        },
        {
          name: "Node.js",
          icon: "node-js",
          color: "#339933",
          description: "Experienced in server-side JavaScript with Node.js.",
        },
        {
          name: "HTML5",
          icon: "html5",
          color: "#E34F26",
          description: "Proficient in modern HTML5 markup.",
        },
        {
          name: "CSS3",
          icon: "css3-alt",
          color: "#1572B6",
          description: "Skilled in CSS3 for styling and responsive design.",
        },
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        {
          name: "Docker",
          icon: "docker",
          color: "#2496ED",
          description: "Experienced in containerization with Docker.",
        },
        {
          name: "Kubernetes",
          icon: "dharmachakra",
          color: "#326CE5",
          description:
            "Familiar with container orchestration using Kubernetes.",
        },
        {
          name: "Jenkins",
          icon: "jenkins",
          color: "#D24939",
          description: "Skilled in CI/CD pipelines with Jenkins.",
        },
        {
          name: "Git",
          icon: "git-alt",
          color: "#F05032",
          description: "Proficient in version control with Git.",
        },
        {
          name: "CircleCI",
          icon: "circle",
          color: "#343434",
          description: "Experienced in CI/CD with CircleCI.",
        },
        {
          name: "GitHub Actions",
          icon: "github",
          color: "#2088FF",
          description: "Familiar with GitHub Actions for workflow automation.",
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          name: "MySQL",
          icon: "database",
          color: "#4479A1",
          description: "Experienced in MySQL database management.",
        },
        {
          name: "PostgreSQL",
          icon: "database",
          color: "#336791",
          description: "Familiar with PostgreSQL for relational databases.",
        },
      ],
    },
    {
      category: "Security",
      skills: [
        {
          name: "Burp Suite",
          icon: "bug",
          color: "#FF6633",
          description:
            "Skilled in web application security testing with Burp Suite.",
        },
        {
          name: "ZAP",
          icon: "shield-alt",
          color: "#5B69BC",
          description: "Experienced in using OWASP ZAP for security testing.",
        },
        {
          name: "Metasploit",
          icon: "user-secret",
          color: "#2A6478",
          description: "Familiar with Metasploit for penetration testing.",
        },
      ],
    },
    {
      category: "Other Tools",
      skills: [
        {
          name: "EFK Stack",
          icon: "search",
          color: "#005571",
          description:
            "Skilled in log management and analysis with EFK (Elasticsearch, Fluentd, Kibana) Stack.",
        },
      ],
    },
  ];

  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/images/solid-color-image.jpeg")}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Skills & Technologies</Text>
        {skillCategories.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.category}</Text>
            <View style={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex} skill={skill} />
              ))}
            </View>
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
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FB9038",
    marginBottom: 24,
    textAlign: "center",
    fontFamily: "Roboto-T", // Main heading now uses Roboto
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FB9038",
    marginBottom: 12,
    fontFamily: "Merriweather_BI", // Subheadings now use Merriweather
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  skillItem: {
    width: "33.33%",
    alignItems: "center",
    marginBottom: 16,
    padding: 8,
  },
  iconContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 50,
    padding: 12,
    marginBottom: 8,
  },
  skillName: {
    color: "#D0D0D0",
    textAlign: "center",
    fontFamily: "Roboto-L",
    marginBottom: 4,
  },
  skillDescription: {
    color: "#A0A0A0",
    textAlign: "center",
    fontFamily: "Roboto-L",
    fontSize: 12,
    paddingHorizontal: 4,
  },
});

export default SkillScreen;
