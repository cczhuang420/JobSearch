import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: SIZES.xLarge,
    paddingBottom: SIZES.large,
  },
  buttonText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },

  image: (dimension) => ({
    width: dimension,
    height: dimension,
    tintColor: COLORS.primary,
  }),
});

export default styles;
