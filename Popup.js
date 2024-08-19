import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Popup = ({ onClose }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <Image
            source={{
              uri: "https://media.giphy.com/media/9kzGqfk7xgN0AZw3jo/giphy.gif",
            }}
            style={styles.robotGif}
          />
          <Text style={styles.popupText}>Hi there! 🚧</Text>
          <Text style={styles.popupText}>
            This portfolio is still a work in progress. Check back soon for more
            updates!
          </Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Got it!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popup: {
    width: 400,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  robotGif: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  popupText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FB9038",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Merriweather_BI",
    fontSize: 16,
  },
});

export default Popup;
