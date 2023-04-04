import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    padding: SIZES.xSmall,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subContainerLeft: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: SIZES.medium,
  },
  subContainerRight: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingRight: SIZES.medium,
  },
  textBox: {
    marginVertical: SIZES.xSmall,
  },
  textHeader: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    color: COLORS.darkGray,
    marginBottom: SIZES.xSmall - 2,
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.darkGray,
  },
});

export default styles;
