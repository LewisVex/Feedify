import axios from "@/axios-setup";
import { Post } from "@/components/Post";
import { Colors } from "@/constants/Colors";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";

export default function PostDetails() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = () => {
    setLoading(true);
    axios
      .get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .finally(() => setLoading(false));
  };

  return (
    <ScrollView
      className="flex-1"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={loadPost}
          progressBackgroundColor={Colors.light.tint}
        />
      }>
      <Stack.Screen
        options={{
          title: "Post #" + id,
          headerTitleAlign: "left",
          contentStyle: {
            backgroundColor: Colors.light.background,
          },
        }}
      />
      <Text className="text-white font-bold text-xl my-4">{post?.title}</Text>
      <Text className="text-white">{post?.content}</Text>
    </ScrollView>
  );
}
