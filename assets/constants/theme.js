import { Dimensions } from "react-native";
const COLORS = {
  primary: "#1159AE",
  secondary: "#444262",
  tertiary: "#FF7754",


  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#FFF",
  lightWhite: "#FAFAFC",
  lightBlue: "#A2B3EF",
  lightOpacity: "#f2f4f734"
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  window: Dimensions.get('window').height,
};

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
