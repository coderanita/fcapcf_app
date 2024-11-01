import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor?: number) =>
  size + (horizontalScale(size) - size) * (factor ? factor : 0.5);

export { horizontalScale, verticalScale, moderateScale };
