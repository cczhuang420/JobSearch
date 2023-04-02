import { icons, SIZES } from "../../../constants";
import { View, Text } from "react-native";
import styles from "./Greeting.styles"

const Greeting = () => {
  return (
    <View>
      <Text style={styles.greetingMessage}>Hello</Text>
      <Text style={styles.userName}>CC</Text>
    </View>
  );
};

export default Greeting;
