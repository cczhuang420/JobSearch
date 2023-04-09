import styles from "./savedJobCard.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SIZES } from "../../constants";

const SavedJobsCard = ({
  jobType,
  jobRemote,
  jobName,
  companyName,
  location,
}) => {
  const [isActive, setIsActive] = useState(true);
  const [heartName, setHeartName] = useState("heart");
  const [heartColor, setHeartColor] = useState(COLORS.secondary);

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

  const handlePress = () => {
    alert("This is only a demo for saved jobs!");
  };

  return (
    <>
      {isActive ? (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: SIZES.medium,
            width: "100%",
            height: 120,
          }}
        >
          <TouchableOpacity style={styles.jobsCard} onPress={handlePress}>
            <View style={styles.container}>
              <View style={styles.jobContainer}>
                <TouchableOpacity style={styles.logoContainer}>
                  <Image
                    source={{
                      uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                    }}
                    resizeMode="contain"
                    style={styles.logImage}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.jobName} numberLines={1}>
                    {jobName}
                  </Text>
                  <Text style={styles.companyName} numberLines={1}>
                    {companyName}
                  </Text>
                </View>
              </View>

              <View style={styles.jobTypeContainer}>
                <Text style={styles.jobType}>{jobType}</Text>
                <Text style={styles.jobType}> {jobRemote}</Text>
              </View>
            </View>
            <View style={styles.rightGroup}>
              <TouchableOpacity onPress={handleSave}>
                <FontAwesome name={heartName} size={24} color={heartColor} />
              </TouchableOpacity>

              <View style={styles.location}>
                <Ionicons name="location-outline" size={16} color="black" />
                <Text style={styles.locationText}>{location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <Text></Text>
      )}
    </>
  );
};

export default SavedJobsCard;
