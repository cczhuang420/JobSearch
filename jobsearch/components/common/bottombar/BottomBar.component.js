import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./bottombar.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../../../constants";

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={icons.home} resizeMode="cover" style={styles.image(25)} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={icons.save} resizeMode="cover" style={styles.image(20)} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={icons.signIn} resizeMode="cover" style={styles.image(30)} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
