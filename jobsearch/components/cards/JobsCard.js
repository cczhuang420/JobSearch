import styles from "./jobsCard.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import checkImgUrl from "../../utils";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const JobsCard = ({ job, handlePress }) => {
  const [isActive, setIsActive] = useState(false);
  const [heartName, setHeartName] = useState("heart-o");
  const [heartColor, setHeartColor] = useState(COLORS.lightGray);

  const handleSave = () => {
    if (!isActive) {
      setHeartName("heart");
      setHeartColor(COLORS.secondary);
      setIsActive(true);
    } else {
      setHeartName("heart-o");
      setHeartColor(COLORS.lightGray);
      setIsActive(false);
    }
  };

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
            <Text style={styles.jobType}> REMOTE</Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </View>

      <View style={styles.rightGroup}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleSave}
        >
          <FontAwesome name={heartName} size={24} color={heartColor} />
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
