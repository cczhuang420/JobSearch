import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setemail] = useState("");
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

export default LoginScreen;
