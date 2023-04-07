import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS } from "../../constants";
import Search from "../../components/home/search/Search.component";
import RecommendedJobs from "../../components/home/recommendedJobs/RecommendedJobs.component";
import Greeting from "../../components/home/greeting/Greeting.component";

const Home = () => {
  const router = useRouter();
  const { userhome } = useSearchParams();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
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
