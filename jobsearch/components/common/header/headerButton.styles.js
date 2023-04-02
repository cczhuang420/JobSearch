import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.small * 5,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonImage: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small,
  }),
});

export default styles;
