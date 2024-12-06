import "@/styles/global.css";

import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.light.tint} style="dark" />
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: Colors.light.background,
            paddingTop: 24,
          },
          drawerLabelStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
          drawerActiveTintColor: Colors.light.tint,
          drawerInactiveTintColor: Colors.light.text,
          sceneStyle: {
            backgroundColor: Colors.light.background,
          },
          headerStyle: {
            backgroundColor: Colors.light.background,
          },
          headerTintColor: Colors.light.tint,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Feedify",
          }}
        />
        <Drawer.Screen
          name="details" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Details",
            title: "Details",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
