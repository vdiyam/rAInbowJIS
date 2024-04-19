import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function SelfAssesmentScreen6({ navigation }) {
  const [rating, setRating] = useState(null);

  const handleNext = () => {
    // Check if a rating has been selected
    if (rating !== null) {
      // If rating is selected, navigate to the next screen
      navigation.navigate("SelfAssessmentScreen7");
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
            Question 6: What is your energy level today?
          </Text>
          {/* Rating Options */}
          <View style={styles.ratingContainer}>
            {/* Option 1 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 1 ? "#ff664d" : "#e68400" },
              ]}
              onPress={() => setRating(1)}
            >
              <Text style={styles.buttonText}>1. Very Bad</Text>
            </TouchableOpacity>
            {/* Option 2 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 2 ? "#ff664d" : "#ff9e1a" },
              ]}
              onPress={() => setRating(2)}
            >
              <Text style={styles.buttonText}>2. Bad</Text>
            </TouchableOpacity>
            {/* Option 3 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 3 ? "#ff664d" : "#ffb34d" },
              ]}
              onPress={() => setRating(3)}
            >
              <Text style={styles.buttonText}>3. Neither Good nor Bad</Text>
            </TouchableOpacity>
            {/* Option 4 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 4 ? "#ff664d" : "#ffc980" },
              ]}
              onPress={() => setRating(4)}
            >
              <Text style={styles.buttonText}>4. Good</Text>
            </TouchableOpacity>
            {/* Option 5 */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 5 ? "#ff664d" : "#ffdfb3" },
              ]}
              onPress={() => setRating(5)}
            >
              <Text style={styles.buttonText}>5. Very Good</Text>
            </TouchableOpacity>
            {/* Option 6 (Prefer not to answer) */}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 6 ? "#ff664d" : "gray" },
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
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: "#ff664d",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    width: 80,
    alignItems: "center",
  },
});
