import { View, SafeAreaView, Text } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";
import { useRouter, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UserInfo from "../components/home/settings/userInfo/UserInfo.component";
import SettingsContainer from "../components/home/settings/cards/SettingsContainer.component";

const Settings = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { marginRight: 50, backgroundColor: COLORS.primary },
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  marginLeft: SIZES.xSmall - 5,
                  marginRight: SIZES.small,
                }}
                onPress={() => router.back()}
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: FONT.regular,
                  fontSize: SIZES.medium,
                  marginTop: 2,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <View
        style={{ margin: SIZES.medium, marginLeft: SIZES.xLarge, marginTop: 1 }}
      >
        <Text style={{ fontFamily: FONT.bold, fontSize: SIZES.xLarge }}>
          Settings
        </Text>
        <UserInfo />
        <SettingsContainer />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
