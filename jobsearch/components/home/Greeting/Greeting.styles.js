import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  greetingContainer: {
    width: "40%",
  },
  greetingMessage: {
    paddingLeft: SIZES.small,
    paddingTop: SIZES.large,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.gray,
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.darkGray,
  },
});

export default styles;
