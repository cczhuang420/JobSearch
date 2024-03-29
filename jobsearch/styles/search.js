import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.darkGray,
  },
  noOfSearchedJobs: {
    marginTop: 2,
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.darkGray,
  },
  loaderContainer: {
    marginTop: SIZES.medium,
  },
  footerContainer: {
    marginTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationImage: {
    width: "80%",
    height: "80%",
    tintColor: COLORS.white,
  },
  paginationTextBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
  },
  paginationText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
});

export default styles;
