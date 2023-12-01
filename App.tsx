import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./App.types";
import HomeScreen from "./src/screens/HomeScreen";
import ViewScreen from "./src/screens/ViewScreen";
import ButtonScreen from "./src/screens/ButtonScreen";
import { FC } from "react";

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="View" component={ViewScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App