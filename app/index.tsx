import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text style={{ color: Colors.light.text }}>Home Screen</Text>
    </View>
  );
}
