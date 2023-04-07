import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "30%",
    marginTop: SIZES.xLarge,
  },
  userImg: {
    width: "20%",
    height: "80%",
    borderRadius: 50,
    marginRight: SIZES.xLarge,
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  userInfo: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
});

export default styles;
