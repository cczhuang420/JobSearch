import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    padding: SIZES.small,
    flex: 1,
    alignItems: "center",
  },
  applyButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    width: "60%",
    height: "100%",
    borderRadius: SIZES.medium,
  },
  applyButtonText: {
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    fontFamily: FONT.bold,
  },
});

export default styles;
