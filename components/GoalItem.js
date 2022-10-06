import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, onDelete }) => {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "rgba(0, 0, 0, .32)" }}
        onPress={onDelete.bind(this, itemData.item)}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={{ color: "white", padding: 8 }}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 8,
    backgroundColor: "#5e0acc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
