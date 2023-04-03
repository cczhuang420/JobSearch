import styles from "./jobsCard.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons } from "../../constants";
import checkImgUrl from "../../utils";
icons;

const JobsCard = ({ job, handlePress }) => {
  return (
    <TouchableOpacity style={styles.jobsCard} onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.jobContainer}>
          <TouchableOpacity style={styles.logoContainer}>
            <Image
              source={{
                uri: checkImgUrl(job.employer_logo)
                  ? job.employer_logo
                  : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
              }}
              resizeMode="contain"
              style={styles.logImage}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.jobName} numberLines={1}>
              {job?.job_title}
            </Text>
            <Text style={styles.companyName} numberLines={1}>
              {job?.employer_name}
            </Text>
          </View>
        </View>

        <View style={styles.jobTypeContainer}>
          <Text style={styles.jobType}> {job.job_employment_type}</Text>
          {job.job_is_remote ? (
            <Text style={styles.jobType}> Remote</Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </View>
      <View style={styles.rightGroup}>
        <TouchableOpacity>
          <Feather name="star" size={24} color={COLORS.lightGray} />
        </TouchableOpacity>

        <View style={styles.location}>
          <Ionicons name="location-outline" size={16} color="black" />
          <Text style={styles.locationText}>
            {job?.job_city}, {job?.job_country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobsCard;
