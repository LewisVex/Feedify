import "@/styles/global.css";

import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router/stack";

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
