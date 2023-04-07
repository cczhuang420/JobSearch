import { StyleSheet } from "react-native";
import { FONT, COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 20,
    marginTop: SIZES.medium,
  },
  titleBox: {
    flexDirection: "column",
  },
  title: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: 10,
  },
  textBox: {
    flexDirection: "column",
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: 10,
  },
});

export default styles;
