import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function SelfAssesmentScreen10({ navigation }) {
  const [rating, setRating] = useState(null);

  const handleNext = () => {
    // Check if a rating has been selected
    if (rating !== null) {
      console.log("Q10 Rating selected:", rating);
      // If rating is selected, navigate to the next screen
      navigation.navigate("Home");
    } else {
      // If rating is not selected, show an alert or message prompting user to select a rating
      alert("Please select a rating before proceeding.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        style={styles.background}
        source={require("../assets/selfasses.png")}
        resizeMode="cover"
      >
        <View style={styles.innerContainer}>
          {/* Question */}
          <Text style={styles.question}>
            Question 10: Rate your want/need and openness to seeking external
            support today?
          </Text>
          {/* Rating Options */}
          <View style={styles.ratingContainer}>
            {/* Option 1 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 1 ? "turquoise" : "#005455" },
              ]}
              onPress={() => setRating(1)}
            >
              <Text style={styles.buttonText}>1. Very Low</Text>
            </TouchableOpacity>
            {/* Option 2 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 2 ? "turquoise" : "#008d8e" },
              ]}
              onPress={() => setRating(2)}
            >
              <Text style={styles.buttonText}>2. Low </Text>
            </TouchableOpacity>
            {/* Option 3 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 3 ? "turquoise" : "#00c5c6" },
              ]}
              onPress={() => setRating(3)}
            >
              <Text style={styles.buttonText}>3. Neither High nor Low</Text>
            </TouchableOpacity>
            {/* Option 4 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 4 ? "turquoise" : "#39fdff" },
              ]}
              onPress={() => setRating(4)}
            >
              <Text style={styles.buttonText}>4. High</Text>
            </TouchableOpacity>
            {/* Option 5 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 5 ? "turquoise" : "#aafeff" },
              ]}
              onPress={() => setRating(5)}
            >
              <Text style={styles.buttonText}>5. Very High</Text>
            </TouchableOpacity>
            {/* Option 6 (Prefer not to answer) */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 6 ? "turquoise" : "gray" },
              ]}
              onPress={() => setRating(6)}
            >
              <Text style={styles.buttonText}>Prefer not to answer</Text>
            </TouchableOpacity>
          </View>
          {/* Navigation Buttons */}
          <View style={styles.buttonContainer}>
            {/* Back Button */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.navButton}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            {/* Home Button */}
            <TouchableOpacity onPress={handleNext} style={styles.navButton}>
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 40,
    width: 300,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: "turquoise",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    width: 80,
    alignItems: "center",
  },
});
