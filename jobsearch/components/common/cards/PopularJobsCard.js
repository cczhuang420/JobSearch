import styles from "./popularJobsCard.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";

const PopularJobsCard = ({ job }) => {
  return (
    <TouchableOpacity>
      <TouchableOpacity>
        <Image source={""} resizeMode="contain" style={""} />
      </TouchableOpacity>
      <View>
        <Text style={styles.companyName} numberLines={1}>
          Atlassian
        </Text>
        <Text style={styles.jobName} numberLines={1}>
          Software Engineer
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobsCard;
