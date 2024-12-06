import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";

export default function Details() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text style={{ color: Colors.light.text }}>Details Screen</Text>
    </View>
  );
}
