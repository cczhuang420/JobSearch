import { StyleSheet } from "react-native";
import { FONT, COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  bioBox: {
    flexDirection: "column",
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 20,
  },
  bioTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom:5,
  },
  bioText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});

export default styles;
