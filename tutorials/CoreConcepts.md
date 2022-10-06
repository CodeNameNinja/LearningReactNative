## Core Components

[Documentation](https://reactnative.dev/docs/components-and-apis)

<!-- The View Component -->

```Js
<View></View>
```

Is used to Group Components. This would be the equivalent of a div in HTML.

<!-- The Text Component -->

```Js
<Text></Text>
```

Is used to display text. This would be the equivalent of a p in HTML.

<!-- The Image Component -->

```Js
<Image></Image>
```

Is used to display images. This would be the equivalent of an img in HTML.

<!-- The StyleSheet Component -->

[Official React Native Styling Documentation](https://reactnative.dev/docs/style)

official article about "Colors" to learn about different ways of setting & using colors in React Native apps: https://reactnative.dev/docs/colors (in this course, we'll primarily use hex code colors).

official API reference articles for the different core components you might be using. For example, you can learn about all the props that can be set on the <View> component here: [Link](https://reactnative.dev/docs/view)

From this article, you can also get to the supported style properties for this component [view#style](https://reactnative.dev/docs/view#style): [view-style-props](https://reactnative.dev/docs/view-style-props)

```Js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

<View style={styles.container}></View>

```

Is used to create styles. This would be the equivalent of a style tag in HTML.

There is no `CSS` in React Native. but you can either use a inline style or creating a Style Object which are written in JavaScript

An Example of inline styles.

```Js
    <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello World</Text>
    </View>
```

## <!-- The Button Component -->

---

```Js
<Button></Button>
```

Is used to create buttons. This would be the equivalent of a button in HTML.

it has the following props.

- title
- onPress
- color
- accessibilityLabel

<!-- The TextInput Component -->

```Js
<TextInput></TextInput>
```

Is used to create text inputs. This would be the equivalent of a input in HTML.

<!-- The ScrollView Component -->

```Js
<ScrollView></ScrollView>
```

Is used to create scrollable views. This would be the equivalent of a div in HTML.

<!-- The FlatList Component -->

```Js
<FlatList></FlatList>
```

Is used to create lists. This would be the equivalent of a ul in HTML.

Flat list works exactly like scroll view, but lazy loads the items that are not visible on the screen. This is useful when you have a large list of items that you want to display.

How to implement the key extractor prop.

```Js
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.key}</Text>}
  keyExtractor={(item) => item.id}
/>
```

<!-- The SectionList Component -->

```Js
<SectionList></SectionList>
```

Is used to create lists with sections. This would be the equivalent of a ul in HTML.

<!-- The Touchable Component -->

```Js
<Touchable></Touchable>
```

Is used to create touchable components. This would be the equivalent of a button in HTML.
