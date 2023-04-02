import { Image, TouchableOpacity } from "react-native";
import styles from "./HeaderButton.styles";

const HeaderButton = ({ iconUri, dimension, handleOnPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handleOnPress}>
      <Image
        source={iconUri}
        resizeMode="cover"
        style={styles.buttonImage(dimension)}
      />
    </TouchableOpacity>
  );
};

export default HeaderButton;
