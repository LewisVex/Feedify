import { Colors } from "@/constants/Colors";
import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function PostsLayout() {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          title: "Post #" + id,
          headerStyle: {
            backgroundColor: Colors.light.background,
          },
          headerTintColor: Colors.light.tint,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: Colors.light.background,
            padding: 16,
          },
        }}
      />
    </View>
  );
}
