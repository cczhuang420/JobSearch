import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    height: 250,
    backgroundColor: COLORS.lightWhite,
    marginBottom: SIZES.medium,
  },
  discriptionBox: {
    flexDirection: "column",
    padding: SIZES.large,
    width: 150,
    height: 250,
  },
  discriptionTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.gray,
  },
  discriptionSubTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  textBox: {
    flex: 1,
    paddingTop: SIZES.xSmall,
    paddingBottom: SIZES.xSmall,
    flexDirection: "column",
  },
  discriptionText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  imageBox: {
    width: 180,
    height: 250,
    padding: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});

export default styles;
