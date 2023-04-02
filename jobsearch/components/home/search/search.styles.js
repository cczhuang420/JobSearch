import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";
const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    marginLeft: SIZES.medium,
    marginRight: SIZES.medium,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    borderColor: COLORS.gray,
    borderWidth: 0.25,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
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
    width: "70%",
    height: "70%",
    tintColor: COLORS.gray,
  },
});
export default styles;
