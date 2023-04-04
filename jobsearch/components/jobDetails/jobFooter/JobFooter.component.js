import { View, Text, TouchableOpacity, Linking } from "react-native";
import styles from "./jobFooter.styles";

const JobFooter = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobFooter;
