import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ setCourseGoals }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);

    // Clear enteredGoal.
    setEnteredGoal("");
  };
  return (
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
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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

export default GoalInput;
