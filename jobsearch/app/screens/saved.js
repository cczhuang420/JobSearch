import { View, Text, SafeAreaView } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";
import { Stack } from "expo-router";
import SavedJobsCard from "../../components/saved/SavedJobCard";
import styles from "../../styles/savedJobs";

const Saved = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View
        style={{
          marginTop: SIZES.xxLarge * 2,
          marginLeft: SIZES.medium,
          marginRight: SIZES.medium,
        }}
      >
        <Text
          style={{
            fontFamily: FONT.bold,
            fontSize: SIZES.large,
            color: COLORS.darkGray,
            marginBottom: SIZES.medium,
          }}
        >
          Your Activity
        </Text>
        <Text
          style={{
            fontFamily: FONT.regular,
            fontSize: SIZES.small,
            color: COLORS.secondary,
            marginBottom: SIZES.medium,
          }}
        >
          This page only for dummy saved jobs
        </Text>

        <SavedJobsCard
          jobType="FULL TIME"
          jobRemote="REMOTE"
          jobName="Software Engineer"
          companyName="GOOGLE"
          location="Australia"
          style={styles.card}
        />

        <SavedJobsCard
          jobType="FULL TIME"
          jobRemote="REMOTE"
          jobName="Software Engineer"
          companyName="Trade Me"
          location="New Zealand"
          style={styles.card}
        />

        <SavedJobsCard
          jobType="FULL TIME"
          jobRemote="REMOTE"
          jobName="Software Engineer"
          companyName="Xero"
          location="Australia"
          style={styles.card}
        />

        <SavedJobsCard
          jobType="Contractor"
          jobRemote="REMOTE"
          jobName="Software Engineer"
          companyName="Visa"
          location="New Zealand"
          style={styles.card}
        />
      </View>
    </SafeAreaView>
  );
};

export default Saved;
