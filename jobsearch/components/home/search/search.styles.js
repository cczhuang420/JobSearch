import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";
const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    borderColor: COLORS.lightGray,
    marginTop: SIZES.xLarge,
    marginLeft: SIZES.small,
    marginRight: SIZES.small,
    height: 50,
  },

  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
  },

  searchButton: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
  },

  searchImage: {
    marginLeft: SIZES.xxLarge * 1.5,
    width: "15%",
    height: "70%",
    tintColor: COLORS.lightGray,
  },
});
export default styles;
