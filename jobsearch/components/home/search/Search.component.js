import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import styles from "./search.styles";
import { icons, SIZES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  const router = useRouter();

  return (
    <View style={styles.searchWrapper}>
      <Image
        source={icons.searchWhite}
        resizeMode="contain"
        style={styles.searchImage}
      />
      <TextInput
        style={styles.searchInput}
        onFocus={() => {
          router.push("/screens/search");
        }}
        placeholder="Search job or company"
      />
    </View>
  );
};

export default Search;
