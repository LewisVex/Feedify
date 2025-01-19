import { Colors } from "@/constants/Colors";
import { Image, Pressable, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  title: string;
  tag: CardTag;
  img: string;
};

export enum CardTag {
  Video = "Video",
  Book = "Book",
  Music = "Music",
  Podcast = "Podcast",
  Article = "Article",
  Movie = "Movie",
}

export default function Card({ title, tag, img }: Props) {
  return (
    <View className="flex flex-row items-start gap-4 p-4">
      <Pressable>
        <Image
          source={{ uri: img }}
          style={{ width: 50, height: 50, borderColor: Colors.light.tint }}
          className="rounded-full bg-gray-800 border mt-1"
        />
      </Pressable>
      <View className="flex-1 flex flex-col items-start gap-2">
        <Text numberOfLines={2} className="text-lg font-bold text-gray-200">
          {title}
        </Text>
        <Text
          style={{ color: Colors.light.tint, borderColor: Colors.light.tint }}
          className="text-sm font-medium rounded-full px-2.5 m-0 border">
          {tag}
        </Text>
      </View>
      <Pressable className="p-1.5 rounded-full">
        <Entypo
          name="dots-three-vertical"
          size={14}
          color={Colors.light.text}
        />
      </Pressable>
    </View>
  );
}
