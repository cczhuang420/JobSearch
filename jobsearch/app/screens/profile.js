import { View, Text, SafeAreaView } from "react-native";
import UserBox from "../../components/userProfile/userBox/UserBox.component";
import { COLORS, SIZES } from "../../constants";
import { Stack } from "expo-router";
import Bio from "../../components/userProfile/about/bio/Bio.component";
import SocialMedias from "../../components/userProfile/about/socialMedias/SocialMedias.components";
import Portfolio from "../../components/userProfile/about/portfolio/Portfolio.component";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View
        style={{
          marginTop: 30,
          padding: SIZES.medium,
        }}
      >
        <UserBox />
        <Bio />
        <SocialMedias />
        <Portfolio />
      </View>
      {/**<UserBox />*/}
    </SafeAreaView>
  );
};

export default Profile;
