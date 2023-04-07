import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../constants";
import { useRouter } from "expo-router";
import styles from "./settingsButton.styles";

const SettingsButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push("/settings")}
    >
      <Ionicons name="settings-outline" size={20} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default SettingsButton;
