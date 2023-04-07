import { COLORS } from "../../../constants";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import styles from "./logout.styles";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.back()}>
      <Entypo name="log-out" size={20} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default LogoutButton;
