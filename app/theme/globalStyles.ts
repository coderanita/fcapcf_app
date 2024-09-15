import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "./responsive";
import { appSpacings } from "./others";
import { appTypography } from "./typography";
import { appColors } from "./colors";

export const globalStyles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  screenPadding: {
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: verticalScale(appSpacings[16]),
  },
  authScreenPadding: {
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: verticalScale(78),
  },
  authScreenTitle: {
    ...appTypography.BOLD.F_24,
    color: appColors.black,
    textAlign: "center",
  },
  authScreenInfo: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.extraLightGray,
    textAlign: "center",
  },
  hvFlexColCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  hPadding16: {
    paddingHorizontal: horizontalScale(appSpacings[16]),
  },
  vPadding16: {
    paddingVertical: verticalScale(appSpacings[16]),
  },
  rowGap4: {
    rowGap: verticalScale(appSpacings[4]),
  },
  rowGap8: {
    rowGap: verticalScale(appSpacings[8]),
  },
  rowGap12: {
    rowGap: verticalScale(appSpacings[12]),
  },
  rowGap16: {
    rowGap: verticalScale(appSpacings[16]),
  },
  rowGap20: {
    rowGap: verticalScale(appSpacings[20]),
  },
  rowGap24: {
    rowGap: verticalScale(appSpacings[24]),
  },
});
