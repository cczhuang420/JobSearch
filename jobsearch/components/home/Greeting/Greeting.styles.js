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
    color: COLORS.gray,
    marginRight: SIZES.xSmall,
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.darkGray,
  },
});

export default styles;
