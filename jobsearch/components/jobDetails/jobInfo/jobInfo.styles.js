// import { StyleSheet } from "react-native";
// import { COLORS, SIZES, FONT } from "../../../constants";

// const styles = StyleSheet.create({
//   container: {
//     height: 800,
//     backgroundColor: COLORS.secondary,
//     marginVertical: SIZES.medium,
//     backgroundColor: COLORS.lightWhite,
//     borderRadius: SIZES.medium,
//     padding: SIZES.medium,
//   },
//   subContainer: {
//     flexDirection: "column",
//     marginVertical: SIZES.small,
//     justifyContent: "center",
//     alignItems: "flex-start",
//   },
//   textBox: {
//     marginTop: SIZES.small,
//   },
//   textHeader: {
//     fontFamily: FONT.bold,
//     fontSize: SIZES.small,
//     color: COLORS.darkGray,
//   },
//   text: {
//     fontFamily: FONT.regular,
//     fontSize: SIZES.small,
//     color: COLORS.darkGray,
//   },
// });

// export default styles;

import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.darkGray,
    fontFamily: FONT.bold,
  },
  textContainer: {
    marginVertical: SIZES.small,
  },
  description: {
    textAlign: "auto",
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
