import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function SelfAssessmentScreen5({ navigation }) {
  const [rating, setRating] = useState(null);

  const handleNext = () => {
    // Check if a rating has been selected
    if (rating !== null) {
      console.log("Q5 Rating selected:", rating);
      // If rating is selected, navigate to the next screen
      navigation.navigate("SelfAssessmentScreen6");
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
            Question 5: How is your physical well being?
          </Text>
          {/* Rating Options */}
          <View style={styles.ratingContainer}>
            {/* Option 1 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 1 ? "pink" : "#b300b2" },
              ]}
              onPress={() => setRating(1)}
            >
              <Text style={styles.buttonText}>1. Very Low</Text>
            </TouchableOpacity>
            {/* Option 2 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 2 ? "pink" : "#e600e5" },
              ]}
              onPress={() => setRating(2)}
            >
              <Text style={styles.buttonText}>2. Low</Text>
            </TouchableOpacity>
            {/* Option 3 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 3 ? "pink" : "#ff00ff" },
              ]}
              onPress={() => setRating(3)}
            >
              <Text style={styles.buttonText}>3. Neither High nor Low</Text>
            </TouchableOpacity>
            {/* Option 4 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 4 ? "pink" : "#ff66ff" },
              ]}
              onPress={() => setRating(4)}
            >
              <Text style={styles.buttonText}>4. High</Text>
            </TouchableOpacity>
            {/* Option 5 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 5 ? "pink" : "#ffccff" },
              ]}
              onPress={() => setRating(5)}
            >
              <Text style={styles.buttonText}>5. Very High</Text>
            </TouchableOpacity>
            {/* Option 6 (Prefer not to answer) */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 6 ? "pink" : "gray" },
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
            {/* Next Button */}
            <TouchableOpacity onPress={handleNext} style={styles.navButton}>
              <Text style={styles.buttonText}>Next</Text>
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
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    width: 80,
    alignItems: "center",
  },
});
