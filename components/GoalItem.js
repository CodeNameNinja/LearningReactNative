import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.listItem}>
      <Text style={{ color: "white" }}>{itemData.item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default GoalItem;
