const COLORS = {
  primary: "#F5F7FC",
  secondary: "#2684FF",
  tertiary: "#40577D",

  gray: "#595961",
  darkGray: "#181A1F",

  black: "#000000",
  purple: "#312651",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "RobotoRegular",
  medium: "RobotoMedium",
  bold: "RobotoBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

// TODO
const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
