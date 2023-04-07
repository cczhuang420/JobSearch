import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="[userhome]"
        options={{
          tabBarActiveTintColor: COLORS.secondary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarActiveTintColor: COLORS.secondary,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={20} color={color} />
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarActiveTintColor: COLORS.secondary,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarActiveTintColor: COLORS.secondary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
