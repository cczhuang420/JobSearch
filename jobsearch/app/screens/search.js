import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useRouter, Stack } from "expo-router";
import { COLORS } from "../../constants";

const search = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.secondary },
          headerShadowVisible: false,
          headerTitle: "Search",
        }}
      />
      <ScrollView>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
