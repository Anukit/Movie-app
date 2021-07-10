import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  Button,
  Icon,
} from "react-native";
// screens
import { Home, Videos, List_Video } from "./screens/";
// tab ด้านล่าง
import Tabs from "./navigation/tabs";

/* const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
}; */

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer /* theme={theme} */>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="List_Video" component={List_Video} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
