import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  greetingContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: SIZES.xLarge,
    marginLeft: SIZES.medium,
    height: "100%",
  },
  greetingMessage: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.lightGray,
    marginRight: SIZES.xSmall,
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
  },
});

export default styles;
