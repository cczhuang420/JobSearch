import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import Greeting from "../components/home/greeting/Greeting.component";
import HeaderButton from "../components/common/header/HeaderButton.component";
import { COLORS, icons } from "../constants";
import Search from "../components/home/search/Search.component";
import PopularJobs from "../components/home/popularJobs/PopularJobs.component";

const Home = () => {
  const router = useRouter();
  const { name } = useSearchParams();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <Greeting name={name} />,
          headerTitle: "",
        }}
      />
      <Search />
      <ScrollView>
        <View>
          <PopularJobs />
        </View>
      </ScrollView>
      <View>
        <Text>Home</Text>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
// return (
//   <Drawer.Navigator>
//     {user ? (
//       <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
//     ) : (
//       <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
//     )}
//   </Drawer.Navigator>
// );
