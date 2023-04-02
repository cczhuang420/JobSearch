import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import Greeting from "../components/home/Greeting/Greeting.component";
import HeaderButton from "../components/common/HeaderButton.component";
import { COLORS, icons } from "../constants";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerLeft: () => <Greeting />,
          headerRight: () => (
            <HeaderButton iconUri={icons.signIn} dimension="80%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView>
        <View></View>
      </ScrollView>
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
