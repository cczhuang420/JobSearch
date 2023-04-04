import { Text, View } from "react-native";
import styles from "./jobInfo.styles";

const JobInfo = ({ jobExpireDay, isRemote, jobType, jobLocation }) => {
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>APPLY BEFORE</Text>
      <Text style={styles.description}>{jobExpireDay}</Text>
    </View>

    <View>
      <Text style={styles.title}>WORK FROM HOME</Text>
      <Text style={styles.description}>{isRemote}</Text>
    </View>

    <View>
      <Text style={styles.title}>JOB TYPE</Text>
      <Text style={styles.description}>{jobType}</Text>
    </View>

    <View>
      <Text style={styles.title}>JOB LOCATION</Text>
      <Text style={styles.description}>{jobLocation}</Text>
    </View>
  </View>;
};

export default JobInfo;
