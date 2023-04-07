import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.xSmall - 8,
    flexDirection: "column",
  },
  subContainer: {
    width: "98%",
    padding: SIZES.xSmall - 4,
    flexDirection: "row",
    backgroundColor: COLORS.lightWhite,
    borderRadius: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightGray,
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginLeft: 2,
    padding: 6,
  },
});

export default styles;
