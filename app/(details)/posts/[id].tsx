import axios from "@/axios-setup";
import { Post } from "@/components/Post";
import { Colors } from "@/constants/Colors";
import { Stack, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetFlatList,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import Ionicons from "@expo/vector-icons/Ionicons";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
};

type Comment = {
  id: number;
  content: string;
  postId: number;
  author: User;
};

export default function PostDetails() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["75%", "100%"], []);

  useEffect(() => {
    loadPost();
    loadComments();
  }, []);

  const loadPost = () => {
    setLoading(true);
    axios
      .get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .finally(() => setLoading(false));
  };

  const loadComments = () => {
    setLoading(true);
    axios
      .get(`/posts/${id}/comments/withUser`)
      .then((res) => setComments(res.data))
      .finally(() => setLoading(false));
  };

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const renderBackdrop = useCallback(
    (props: BottomSheetBackgroundProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  const renderHandle = useCallback(
    () => (
      <BottomSheetView className="px-6 pt-2 pb-4 gap-8 border-b-[1.1px] border-white/15">
        <View className="w-12 h-1 self-center bg-white/15 rounded-lg"></View>

        <BottomSheetView className="flex-row items-center justify-between">
          <Text className="text-white font-bold text-2xl">Comments</Text>
          <TouchableOpacity onPress={handleCloseBottomSheet}>
            <Ionicons name="close-outline" size={30} color="white" />
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetView>
    ),
    []
  );

  const renderItem = useCallback(
    ({ item }: { item: Comment }) => (
      <BottomSheetView key={item.id} className="flex-col">
        <Text className="text-white/70 font-extrabold text-sm">
          @{item.author.username}
        </Text>
        <Text className="text-white">{item.content}</Text>
      </BottomSheetView>
    ),
    []
  );

  return (
    <BottomSheetModalProvider>
      <ScrollView
        className="flex-1 p-4"
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

        {comments.length > 0 && (
          <Pressable
            onPress={handleOpenBottomSheet}
            className="flex-row items-center justify-start gap-2 p-4 bg-white/10 border border-transparent rounded-lg my-4 active:bg-white/15 active:border-white/30">
            <Text className="text-white font-bold">Comments</Text>
            <Text className="text-white/80">{comments.length}</Text>
          </Pressable>
        )}
      </ScrollView>

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{
          backgroundColor: Colors.light.tint,
        }}
        backgroundStyle={{
          backgroundColor: Colors.light.background,
        }}
        handleComponent={renderHandle}
        enableDynamicSizing={false}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}>
        <BottomSheetFlatList
          data={comments}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          refreshing={loading}
          onRefresh={loadComments}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 30,
    alignItems: "flex-start",
    gap: 16,
  },
});
