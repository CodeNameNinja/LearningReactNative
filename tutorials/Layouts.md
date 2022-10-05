<!-- Flex in React Native -->

# Flex in React Native

## Introduction

This tutorial will teach you how to use Flexbox in React Native. Flexbox is a layout system that helps you align and position elements in your application. In this tutorial, you'll learn how to use Flexbox to position and align elements on the screen.

```js
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Flex Tutorial</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

This code adds a `View` and a `Text` element to the screen. The `View` element is the parent element, and the `Text` element is the child element. The `Text` element displays the text "Flex Tutorial" on the screen.

The `View` element has a style property that is set to the `styles.container` object
