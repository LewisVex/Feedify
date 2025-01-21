import axios from "@/axios-setup";
import PostItem, { type Post } from "@/components/Post";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";

export default function TabPosts() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    setLoading(true);
    axios
      .get("/posts")
      .then((res) => setData(res.data))
      .finally(() => setLoading(false))
      .catch((err) => console.error(err));
  };

  return (
    <FlatList
      className="flex-1 p-4 gap-4"
      data={data}
      renderItem={({ item }) => <PostItem post={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={loadPosts}
          progressBackgroundColor={Colors.light.tint}
        />
      }
    />
  );
}
