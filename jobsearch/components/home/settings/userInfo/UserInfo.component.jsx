import styles from "./userInfo.styles";
import { View, Text, Image } from "react-native";

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userImg}
        source={{
          uri: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg",
        }}
      />
      <View>
        <Text style={styles.userName}>Username</Text>
        <Text style={styles.userInfo}>username@gmail.com</Text>
        <Text style={styles.userInfo}>Auckland, NZ</Text>
      </View>
    </View>
  );
};

export default UserInfo;
