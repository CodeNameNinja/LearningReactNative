import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ open, setOpen, setCourseGoals }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    if (enteredGoal.length === 0) return;
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);

    // Clear enteredGoal.
    setEnteredGoal("");
    setOpen(false);
  };
  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goals"
              onPress={addGoalHandler}
              color="#819cfffa"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancle"
              onPress={() => setOpen(false)}
              color="#c00f39"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1e085a",
  },
  textInput: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    marginTop: 8,
    marginRight: 8,
    padding: 8,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default GoalInput;
