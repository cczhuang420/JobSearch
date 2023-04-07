import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import JobsCard from "../../cards/JobsCard";
import useFetch from "../../../hook/useFetch";

import styles from "./recommendedJobs.styles";
import { COLORS } from "../../../constants";

const RecommendedJobs = () => {
  const router = useRouter();
  const { data, loading, error } = useFetch("search", {
    query: "Software Engineer",
    num_pages: "2",
  });
  return (
    <View style={styles.container}>
      <View style={styles.jobsHeader}>
        <Text style={styles.jobsHeaderTitle}>Recommended for you</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllButton}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.secondary} />
        ) : error ? (
          <Text>Something is wrong</Text>
        ) : (
          data?.map((job) => (
            <JobsCard
              job={job}
              key={`job${job.job_id}`}
              handlePress={() => router.push(`/job-details/${job.job_id}`)}
              handleSave={() => ""}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default RecommendedJobs;
