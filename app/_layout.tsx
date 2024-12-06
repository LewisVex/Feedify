import { Stack } from "expo-router";

import "@/styles/global.css";
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.background,
        },
        headerTintColor: Colors.light.tint,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: Colors.light.background,
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          statusBarStyle: "light",
          statusBarBackgroundColor: Colors.light.background,
        }}
      />
    </Stack>
  );
}
