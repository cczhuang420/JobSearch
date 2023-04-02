import { icons, SIZES } from "../../../constants";
import { View, Text } from "react-native";
import styles from "./greeting.styles";

const Greeting = () => {
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingMessage}>Hello</Text>
      <Text style={styles.userName}></Text>
    </View>
  );
};

export default Greeting;
