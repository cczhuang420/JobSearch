import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT, icons, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  popularJobsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
});

export default styles;
