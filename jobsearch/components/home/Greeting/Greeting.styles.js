import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  greetingContainer: {
    flex: 1,
    marginTop: SIZES.xLarge,
    width: "100%",
  },
  greetingMessage: {
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
