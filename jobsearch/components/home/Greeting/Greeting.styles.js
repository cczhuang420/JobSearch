import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  greetingContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: SIZES.small,
    marginLeft: SIZES.medium,
    marginBottom:10,
    height: "100%",
  },
  greetingMessage: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
    marginRight: SIZES.xSmall,
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.white
  },
});

export default styles;
