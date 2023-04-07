import { StyleSheet } from "react-native";
import { COLORS, SIZES, icons, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium-2,
    marginLeft: SIZES.small,
    marginRight: SIZES.small,
  },
  jobsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  jobsHeaderTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
  seeAllButton: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default styles;
