import { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";

export default function SelfAssesmentScreen7({ navigation }) {
  const [rating, setRating] = useState(null);

  const handleNext = () => {
    if (rating !== null) {
      // If rating is selected, navigate to the next screen
      navigation.navigate("SelfAssessmentScreen8");
    } else {
      // If rating is not selected, show an alert or message prompting user to select a rating
      alert("Please select a rating before proceeding.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/selfasses.png")}
        resizeMode="cover"
      >
        <View style={styles.innerContainer}>
          <Text style={styles.question}>
            Question 7: How would you rate your overall mood today?
          </Text>
          <View style={styles.ratingContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 1 ? "#E0E0B0" : "#E0E0B0" },
              ]}
              onPress={() => setRating(1)}
            >
              <Text style={styles.buttonText}>1. Very Bad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 2 ? "#F0E68C" : "#FFD700" },
              ]}
              onPress={() => setRating(2)}
            >
              <Text style={styles.buttonText}>2. Bad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 3 ? "#FFFF00" : "#FFA500" },
              ]}
              onPress={() => setRating(3)}
            >
              <Text style={styles.buttonText}>3. Neither Good nor Bad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 4 ? "#FFD700" : "#F0E68C" },
              ]}
              onPress={() => setRating(4)}
            >
              <Text style={styles.buttonText}>4. Good</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: rating === 5 ? "#FFD700" : "#FFA500" },
              ]}
              onPress={() => setRating(5)}
            >
              <Text style={styles.buttonText}>5. Very Good</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.navButton}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
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
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    width: 80,
    alignItems: "center",
  },
});
