import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import styles from "./search.styles";
import { icons, SIZES } from "../../../constants";

const Search = ({ searchText, setSearchTex, handleChangeText }) => {
  const router = useRouter();

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => {
            setSearchTex(text);
          }}
          placeholder="Search job or company"
        />
      </View>

      <TouchableOpacity style={styles.searchButton}>
        <Image
          source={icons.searchWhite}
          resizeMode="contain"
          style={styles.searchImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
