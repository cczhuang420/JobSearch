import { icons, SIZES } from "../../../constants";
import { View, Text, FlatList } from "react-native";
import styles from "./greeting.styles";

const Greeting = ({name}) => {
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingMessage}>Hello</Text>
      <Text style={styles.userName}>{name}</Text>
    </View>
  );
};

export default Greeting;
