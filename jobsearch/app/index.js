import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FF7754" },
          headerShadowVisible: false,
          headerLeft: () => <Text>left-header</Text>,
          headerRight: () => <Text>right-header</Text>,
          headerTitle: "CC-JOBSERACHER",
        }}
      />
      <ScrollView>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
