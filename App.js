import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [open, setOpen] = useState(false);
  const deleteGoalHandler = (item) => {
    console.log("Delete Goal");

    // Filter out the item that was deleted.
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== item.id);
    });
  };
  return (
    <View style={styles.container}>
      <Button
        title="Add new goal"
        color="green"
        onPress={() => setOpen(true)}
      ></Button>

      <GoalInput
        setCourseGoals={setCourseGoals}
        open={open}
        setOpen={setOpen}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <GoalItem onDelete={deleteGoalHandler} itemData={itemData} />
          )}
        />
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

  goalsContainer: {
    flex: 5,
  },
});
