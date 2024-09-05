import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";

const ExperienceScreen = () => {
  const experiences = [
    {
      title: "Junior DevOps Engineer",
      company: "EOX Vantage",
      date: "AUG 2023 – Present",
      responsibilities: [
        "Implemented EFK stack for enhanced logging architecture",
        "Deployed Wazuh SIEM solution across multiple servers",
        "Implemented GitHub Actions for CI/CD process",
        "Conducted Dynamic Application Security Testing (DAST)",
        "Developed security scripts for vulnerability scanning",
      ],
    },
    {
      title: "Software Developer Intern / DevOps Intern",
      company: "EOX Vantage",
      date: "JAN 2023 – AUG 2023",
      responsibilities: [
        "Gained experience with JavaScript, Ruby, and Ruby on Rails",
        "Migrated client project to company's low code platform",
        "Conducted pen-testing using ZAP, Burp Suite, and sqlmap",
        "Implemented Circle CI for continuous integration",
        "Explored Jenkins, Terraform, and Ansible",
      ],
    },
    {
      title: "Virtual Internship",
      company: "Future Ready Talent",
      date: "SEP 2021 – JUN 2022",
      responsibilities: [
        "Learned about and worked with Microsoft Azure Technologies",
      ],
    },
    {
      title: "Summer Research Intern",
      company: "ISFCR, PES University",
      date: "JUN 2021 - SEP 2021",
      responsibilities: [
        "Worked on securing containers with least privileged capabilities",
        "Presented comparison between Seccomp and AppArmor performances",
      ],
    },
  ];

  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/images/solid-color-image.jpeg")}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Professional Experience</Text>
        {experiences.map((exp, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{exp.title}</Text>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.date}>{exp.date}</Text>
            <View style={styles.divider} />
            {exp.responsibilities.map((resp, i) => (
              <Text key={i} style={styles.responsibility}>
                • {resp}
              </Text>
            ))}
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
    fontFamily: "Roboto-T",
  },
  card: {
    backgroundColor: "rgba(40, 44, 52, 0.9)", // Dark background
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#FB9038", // Orange color for title
    fontFamily: "Roboto-T",
  },
  company: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#E0E0E0", // Light grey for company name
    fontFamily: "Roboto-L",
  },
  date: {
    fontSize: 16,
    color: "#A0A0A0", // Muted grey for date
    marginBottom: 12,
    fontFamily: "Roboto-L",
  },
  divider: {
    height: 1,
    backgroundColor: "#FB9038",
    marginVertical: 12,
  },
  responsibility: {
    fontSize: 16,
    marginBottom: 8,
    color: "#D0D0D0", // Light grey for responsibilities
    fontFamily: "Roboto-L",
  },
});

export default ExperienceScreen;
