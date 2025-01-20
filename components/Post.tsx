import axios from "@/axios-setup";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  post: Post;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  age: number;
};

export default function PostItem({ post }: Props) {
  const [author, setAuthor] = useState<User>();

  useEffect(() => {
    if (!post.authorId) return;

    axios
      .get(`/users/${post.authorId}`)
      .then((res) => setAuthor(res.data[0]))
      .catch((err) => console.error(err));
  }, [post.authorId]);

  return (
    <Link
      asChild
      href={{
        pathname: "/(posts)/[id]",
        params: { id: post.id },
      }}>
      <TouchableOpacity className="flex flex-col justify-start items-start p-4 rounded-lg">
        <Text className="text-white/60">@{author?.username}</Text>
        <Text className="text-white font-bold text-lg">{post.title}</Text>
      </TouchableOpacity>
    </Link>
  );
}
