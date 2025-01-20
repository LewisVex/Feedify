import axios from "@/axios-setup";
import { Post } from "@/components/Post";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function PostDetails() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => setPost(res.data[0]));
  }, [id]);

  return (
    <View>
      <Text className="text-white font-bold text-xl my-4">{post?.title}</Text>
      <Text className="text-white">{post?.content}</Text>
    </View>
  );
}
