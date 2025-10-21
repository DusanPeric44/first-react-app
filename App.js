import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import QuoteScreen from "./screens/QuoteScreen";
import ListScreen from "./screens/ListScreen";
import ButtonScreen from "./screens/ButtonScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "./screens/MenuScreen";
import StudentsScreen from "./screens/StudentsScreen";
import BoxScreen from "./screens/BoxScreen";
import PostsScreen from "./screens/PostsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
        <Stack.Screen name="Quote" component={QuoteScreen}></Stack.Screen>
        <Stack.Screen name="Button" component={ButtonScreen}></Stack.Screen>
        <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
        <Stack.Screen name="Students" component={StudentsScreen}></Stack.Screen>
        <Stack.Screen name="Box" component={BoxScreen}></Stack.Screen>
        <Stack.Screen name="Posts" component={PostsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
