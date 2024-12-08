import "@/styles/global.css";

import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

import { Stack } from "expo-router/stack";
import { View } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        statusBarBackgroundColor: Colors.light.tint,
        statusBarStyle: "dark",
        headerStyle: {
          backgroundColor: Colors.light.background,
        },
        headerTintColor: Colors.light.tint,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen name="(tabs)" options={{ title: "Feedify" }} />
    </Stack>
  );
}
