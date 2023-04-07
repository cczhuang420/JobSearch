import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./settingsCard.styles";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../../constants";

const SettingsCard = ({ iconName, color, text, onClick }) => {
  return (
    <TouchableOpacity style={styles.subContainer} onPress={onClick}>
      <MaterialCommunityIcons name={iconName} size={30} color={color} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SettingsCard;

// <Ionicons name={iconName} size={30} color={COLORS.alert} />
