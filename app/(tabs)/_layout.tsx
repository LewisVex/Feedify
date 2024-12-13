import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.light.tint,
        tabBarInactiveTintColor: Colors.light.text,
        tabBarStyle: {
          backgroundColor: Colors.light.background,
        },
        tabBarLabelPosition: "below-icon",
        sceneStyle: {
          backgroundColor: Colors.light.background,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={24} color={color} />
            ) : (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="settings-sharp" size={24} color={color} />
            ) : (
              <Ionicons name="settings-outline" size={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
