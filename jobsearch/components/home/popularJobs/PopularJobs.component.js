import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import PopularJobsCard from "../../common/cards/JobsCard";

import styles from "./popularJobs.styles";

const PopularJobs = ({}) => {
  const router = useRouter();

  return (
    <View style={styles.popularJobsContainer}>
      <View style={styles.popularJobsHeader}>
        <Text style={styles.popularJobsHeaderTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllButton}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <PopularJobsCard />
      </View>
    </View>
  );
};

export default PopularJobs;
