import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import Greeting from "../components/home/greeting/Greeting.component";
import { COLORS, icons } from "../constants";
import Search from "../components/home/search/Search.component";
import PopularJobs from "../components/home/popularJobs/PopularJobs.component";
import BottomBar from "../components/common/bottombar/BottomBar.component";

const Home = () => {
  const router = useRouter();
  const { userhome } = useSearchParams();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerLeft: () => <Greeting name={userhome} />,
          headerTitle: "",
        }}
      />
      <Search />
      <ScrollView>
        <View>
          <PopularJobs />
        </View>
      </ScrollView>
      <BottomBar />
    </SafeAreaView>
  );
};

export default Home;
