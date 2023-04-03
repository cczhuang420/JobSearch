import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  popularJobsCard: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  popularJobsContainer: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  jobContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  logImage: {
    width: "60%",
    height: "60%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  companyName: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.darkGray,
  },
  location: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: SIZES.small,
    marginTop: SIZES.xLarge * 2,
  },
  locationText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    marginLeft: SIZES.xSmall / 2,
  },
  rightGroup: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  jobTypeContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  jobType: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    backgroundColor: COLORS.primary,
    marginTop: 10,
    marginRight: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    textTransform: "capitalize",
  },
});

export default styles;
