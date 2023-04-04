import { Text, View } from "react-native";
import styles from "./jobInfo.styles";

const JobInfo = ({ jobExpireDay, isRemote, jobType, jobLocation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainerLeft}>
        <View style={styles.textBox}>
          <Text style={styles.textHeader}>APPLY BEFORE</Text>
          <Text style={styles.text}>{jobExpireDay}</Text>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.textHeader}>WORK FROM HOME</Text>
          <Text style={styles.text}>{isRemote ? "Yes" : "No"}</Text>
        </View>
      </View>

      <View style={styles.subContainerRight}>
        <View style={styles.textBox}>
          <Text style={styles.textHeader}>JOB TYPE</Text>
          <Text style={styles.text}>{jobType}</Text>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.textHeader}>JOB LOCATION</Text>
          <Text style={styles.text}>{jobLocation}</Text>
        </View>
      </View>
    </View>
  );
};

export default JobInfo;
