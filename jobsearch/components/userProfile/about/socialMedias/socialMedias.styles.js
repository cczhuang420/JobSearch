import { StyleSheet } from "react-native";
import { FONT, COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  box: {
    flexDirection: "column",
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 20,
    marginTop: SIZES.medium,
  },
  title: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: 10,
  },
  iconBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
