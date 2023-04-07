import { View, Text, TouchableOpacity } from "react-native";
import styles from "./socialMedias.styles";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../../../constants";

const SocialMedias = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>ON THE WEB</Text>
      <View style={styles.iconBox}>
        <TouchableOpacity>
          <Entypo
            name="linkedin-with-circle"
            size={36}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            name="twitter-with-circle"
            size={36}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            name="facebook-with-circle"
            size={36}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            name="instagram-with-circle"
            size={36}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialMedias;
