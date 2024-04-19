import React, { useEffect, useState, useCallback } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  BackHandler,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function JournalEntryScreen({ navigation }) {
  const [journalEntry, setJournalEntry] = useState("");
  const [isModified, setIsModified] = useState(false);

  // Function to save the journal entry to AsyncStorage
  const saveJournalEntry = async () => {
    try {
      await AsyncStorage.setItem("journalEntry", journalEntry);
      setIsModified(false);
      alert("Journal entry saved successfully!");
    } catch (error) {
      console.error("Error saving journal entry:", error);
      alert("Failed to save journal entry.");
    }
  };

  // Function to load the saved journal entry from AsyncStorage
  const loadJournalEntry = async () => {
    try {
      const savedEntry = await AsyncStorage.getItem("journalEntry");
      if (savedEntry !== null) {
        console.log("Saved Entry:", savedEntry);
        setJournalEntry(savedEntry);
      }
    } catch (error) {
      console.error("Error loading journal entry:", error);
    }
  };

  // useEffect hook to load the saved journal entry when component mounts
  useEffect(() => {
    loadJournalEntry();
  }, []);

  const handleTextChange = useCallback((text) => {
    setJournalEntry(text);
    setIsModified(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/selfasses.png")}
        resizeMode="cover"
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Traditional Journal Entry</Text>
          <TextInput
            style={styles.input}
            placeholder="Write your journal entry here..."
            multiline={true}
            numberOfLines={8}
            value={journalEntry}
            onChangeText={handleTextChange}
          />
          <TouchableOpacity style={styles.button} onPress={saveJournalEntry}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  background: {
    flex: 1,
  },
});
