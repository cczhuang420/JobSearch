import { StyleSheet } from "react-native";
import { COLORS, SIZES, icons, FONT } from "../../../constants";

const styles = StyleSheet.create({
  popularJobsContainer: {
    marginTop: SIZES.medium,
    marginLeft: SIZES.small,
    marginRight: SIZES.small,
  },
  popularJobsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  popularJobsHeaderTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: COLORS.black,
  },
  seeAllButton: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default styles;
