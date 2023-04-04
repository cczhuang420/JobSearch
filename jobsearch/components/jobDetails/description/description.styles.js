import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xSmall,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.darkGray,
    fontFamily: FONT.bold,
  },
  textContainer: {
    marginVertical: SIZES.small,
  },
  description: {
    textAlign: "auto",
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
