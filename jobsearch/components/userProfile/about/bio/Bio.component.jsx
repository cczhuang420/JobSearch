import { View, Text } from "react-native";
import styles from "./bio.styles";

const Bio = () => {
  return (
    <View style={styles.bioBox}>
      <Text style={styles.bioTitle}>BIO</Text>
      <Text style={styles.bioText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </Text>
    </View>
  );
};

export default Bio;
