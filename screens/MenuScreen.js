import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MenuScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      <Button
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />
    </View>
    // Touchable opacity koji ce voditi na drugi screen

    // Create a new screen called "HomeScreen" and add navigation from "MenuScreen" to this new screen using a Button element. E

    // Add another button in the HomeScreen that navigates back to the MenuScreen. E M

    //Create a "ProfileScreen" and add a TouchableOpacity in the HomeScreen that navigates to this "ProfileScreen". E M H
    // Also, add a button in the ProfileScreen that navigates back to the HomeScreen.
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default MenuScreen;
