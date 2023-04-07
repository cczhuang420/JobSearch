import { View, Text } from "react-native";
import styles from "./portfolio.styles";

const Portfolio = () => {
  return (
    <View style={styles.box}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>WEBSITE</Text>
        <Text style={styles.title}>PHONE</Text>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.text}>https://www.google.com/</Text>
        <Text style={styles.text}>+64 2123456789</Text>
      </View>
    </View>
  );
};

export default Portfolio;
