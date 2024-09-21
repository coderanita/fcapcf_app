import { StyleSheet } from "react-native";
import { appColors } from "../../theme/colors";
import { moderateScale, verticalScale } from "../../theme/responsive";
import { appTypography } from "../../theme/typography";
import { appSpacings } from "../../theme/others";

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: appColors.white,
    borderTopColor: appColors.white,
    borderTopLeftRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
    height: verticalScale(78),
  },
  tabBarLabelStyle: {
    ...appTypography.REGULAR.F_10,
    paddingTop: 0,
    marginTop: moderateScale(-6),
    marginBottom: moderateScale(appSpacings[16]),
  },
});
