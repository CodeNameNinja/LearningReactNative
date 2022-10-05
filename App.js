import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);

    // Clear enteredGoal.
    setEnteredGoal("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button
          title="Add Goals"
          style={styles.button}
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Course Goals</Text>
        {courseGoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  goalsContainer: {
    flex: 5,
  },
  textInput: {
    borderColor: "#ccccc",
    borderWidth: 1,
    padding: 10,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  button: {
    width: "30%",
  },
});
