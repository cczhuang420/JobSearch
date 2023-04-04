import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../constants";

const styles = StyleSheet.create({
  titleContainer: { marginBottom: SIZES.xLarge },
  title: {
    fontFamily: FONT.bold,
    fontSize: 36,
    color: COLORS.secondary,
  },
  TextInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: SIZES.xxLarge * 4,
    marginLeft: SIZES.xLarge,
    marginRight: SIZES.xLarge,
  },
  TextInputWrapper: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    borderColor: COLORS.gray,
    borderWidth: 0,
    height: 50,
    width: 300,
    marginBottom: SIZES.xLarge,
  },

  TextInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },

  buttonContainer: {
    flex: 1,
    width: 300,
    marginTop: SIZES.small,
    marginLeft: SIZES.xxLarge,
    marginRight: SIZES.xxLarge,
  },

  loginButton: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary,
  },

  loginButtonText: {
    color: COLORS.primary,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
});

export default styles;
