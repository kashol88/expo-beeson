import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { AppProvider } from "../contexts/AppContext";

export default function RootLayout() {
  return (
    <AppProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#3B82F6",
          tabBarInactiveTintColor: "#6B7280",
          tabBarPosition: Platform.OS === "web" ? "left" : "bottom",
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderTopColor: "#E5E7EB",
            paddingTop: 8,
            height: 84,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginBottom: 8,
          },
          headerShown: true,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Översikt",
            headerTitle: "God morgon!",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="hives"
          options={{
            title: "Bikupor",
            headerTitle: "Mina Bikupor",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="inspections"
          options={{
            title: "Inspektioner",
            headerTitle: "Inspektioner",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="clipboard" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="weather"
          options={{
            title: "Väder",
            headerTitle: "Väderprognos",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="partly-sunny" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profil",
            headerTitle: "Profil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </AppProvider>
  );
}
