import styles from "./jobsCard.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../../../constants";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

const PopularJobsCard = ({ job, handlePress }) => {
  return (
    <TouchableOpacity style={styles.popularJobsCard} onPress={handlePress}>
      <View style={styles.popularJobsContainer}>
        <View style={styles.jobContainer}>
          <TouchableOpacity style={styles.logoContainer}>
            <Image
              source={icons.home}
              resizeMode="contain"
              style={styles.logImage}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.jobName} numberLines={1}>
              Software Engineer
            </Text>
            <Text style={styles.companyName} numberLines={1}>
              Atlassian
            </Text>
          </View>
        </View>

        <View style={styles.jobTypeContainer}>
          <Text style={styles.jobType}> full time</Text>
          <Text style={styles.jobType}> Remote</Text>
        </View>
      </View>
      <View style={styles.rightGroup}>
        <TouchableOpacity>
          <Feather name="star" size={24} color={COLORS.lightGray} />
        </TouchableOpacity>

        <View style={styles.location}>
          <Ionicons name="location-outline" size={16} color="black" />
          <Text style={styles.locationText}>Auckland, NZ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobsCard;
