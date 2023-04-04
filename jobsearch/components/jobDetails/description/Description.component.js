import React from "react";
import { View, Text } from "react-native";
import styles from "./description.styles";

const Description = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JOB DESCRIPTION</Text>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Description;
