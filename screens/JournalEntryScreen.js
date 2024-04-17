import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function JournalEntryScreen({ navigation }) {
  const [journalEntry, setJournalEntry] = useState("");

  const saveJournalEntry = async () => {
    try {
      await AsyncStorage.setItem("journalEntry", journalEntry);
      alert("Journal entry saved successfully!");
    } catch (error) {
      console.error("Error saving journal entry:", error);
      alert("Failed to save journal entry.");
    }
  };

  return (
    <SafeAreaView style={styles.backContainer}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/journal.png")}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Traditional Journal Entry</Text>
          <TextInput
            style={styles.input}
            placeholder="Write your journal entry here..."
            multiline={true}
            numberOfLines={12} // Increased number of lines to make it bigger
            value={journalEntry}
            onChangeText={(text) => setJournalEntry(text)}
          />
          <TouchableOpacity
            onPress={saveJournalEntry}
            style={styles.saveButton}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24, // Increased font size
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 300, // Increased height of input
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    fontSize: 18, // Increased font size
    fontWeight: "bold", // Increased font weight
  },
  saveButton: {
    backgroundColor: "#007bff", // Changed button color to make it more visible
    padding: 15,
    borderRadius: 10,
    marginTop: 10, // Added margin top for spacing
    width: "50%", // Make button wider
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 20, // Increased font size
    fontWeight: "bold", // Increased font weight
    color: "white", // Changed text color to white for better visibility
  },
});
