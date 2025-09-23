import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/MainScreen";
import ExcerciseScreen from "./screens/ExerciseScreen";
import QuoteScreen from "./screens/QuoteScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={QuoteScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
