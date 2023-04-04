import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useState, useCallback } from "react";
import { useRouter, Stack, useSearchParams } from "expo-router";
import { COLORS, SIZES } from "../../constants";
import Description from "../../components/jobDetails/description/Description.component";
import JobBox from "../../components/jobDetails/jobBox/JobBox.component";
import JobFooter from "../../components/jobDetails/jobFooter/JobFooter.component";
import useFetch from "../../hook/useFetch";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import JobInfo from "../../components/jobDetails/jobInfo/JobInfo.component";

const JobDetails = () => {
  const router = useRouter();
  const { id } = useSearchParams();

  const [refreshing, setRefreshing] = useState(false);

  const { data, loading, error, refetch } = useFetch("job-details", {
    job_id: id,
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { marginRignt: 50, backgroundColor: COLORS.primary },
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: SIZES.small }}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity style={{ marginRight: SIZES.small }}>
              <FontAwesome name="heart-o" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.secondary} />
          ) : error ? (
            <Text>Something went wrong{error}</Text>
          ) : data.length === 0 ? (
            <Text>No Data Available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <JobBox
                logo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                jobPostdate={data[0].job_posted_at_datetime_utc}
              />
              <JobInfo
                jobExpireDay={
                  data[0].job_offer_expiration_datetime_utc ??
                  "No Expiration Date"
                }
                isRemote={data[0].job_is_remote}
                jobType={data[0].job_employment_type}
                jobLocation={data[0].job_country}
              />
              <Description
                description={data[0].job_description ?? "No data provided"}
              />
            </View>
          )}
        </ScrollView>
        <JobFooter
          url={
            data[0]?.job_google_link ??
            "https://careers.google.com/jobs/results/"
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;

// r8gLzzqU7VUAAAAAAAAAAA==
