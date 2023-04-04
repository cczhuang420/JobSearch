import styles from "./jobBox.styles";
import checkImgUrl from "../../../utils";

import { View, Text, Image } from "react-native";
import React from "react";

const JobBox = ({ logo, jobTitle, companyName, jobPostdate }) => {
  const currentDate = new Date().getTime();
  const jobdate = new Date(jobPostdate).getTime();
  const daysDifference = Math.ceil(
    (currentDate - jobdate) / (1000 * 60 * 60 * 24)
  );

  const postedAt = `Posted ${daysDifference} days ago`;

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logoImage}
          source={{
            uri: checkImgUrl(logo)
              ? logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
      </View>

      <View>
        <Text style={styles.daysDifferenceText}>{postedAt}</Text>
      </View>
    </View>
  );
};

export default JobBox;
