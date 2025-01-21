import "@/styles/global.css";

import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router/stack";
import { View } from "react-native";

export default function Layout() {
  return (
    <View
      className="flex-1"
      style={{ backgroundColor: Colors.light.background }}>
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
          navigationBarColor: Colors.light.background,
        }}>
        <Stack.Screen name="(tabs)" options={{ title: "Feedify" }} />
      </Stack>
    </View>
  );
}
