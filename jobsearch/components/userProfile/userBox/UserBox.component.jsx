import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./userBox.styles";

const UserBox = ({ image, role, roleType, joinAt, experinece }) => {
  return (
    <View style={styles.container}>
      <View style={styles.discriptionBox}>
        <Text style={styles.discriptionTitle}>Software Engineer</Text>
        <View style={styles.textBox}>
          <Text style={styles.discriptionSubTitle}>Type</Text>
          <Text style={styles.discriptionText}>Senior</Text>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.discriptionSubTitle}>Joined At</Text>
          <Text style={styles.discriptionText}>Sep 2018</Text>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.discriptionSubTitle}>Experience</Text>
          <Text style={styles.discriptionText}>4 Years</Text>
        </View>
      </View>

      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={{
            uri: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg",
          }}
        ></Image>
      </View>
    </View>
  );
};

export default UserBox;
