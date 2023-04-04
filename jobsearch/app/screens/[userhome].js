import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, icons } from "../../constants";
import Search from "../../components/home/search/Search.component";
import RecommendedJobs from "../../components/home/recommendedJobs/RecommendedJobs.component";
import Greeting from "../../components/home/greeting/Greeting.component";

const Home = () => {
  const router = useRouter();
  const { userhome } = useSearchParams();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.secondary },
          headerShadowVisible: false,
          headerLeft: () => <Greeting name={userhome} />,
          headerTitle: "",
        }}
      />
      <ScrollView>
        <Search />
        <View>{/*<RecommendedJobs />*/}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
