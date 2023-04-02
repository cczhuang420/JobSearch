import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  greetingContainer: {
    width: "40%",
  },
  greetingMessage: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
});

export default styles;
