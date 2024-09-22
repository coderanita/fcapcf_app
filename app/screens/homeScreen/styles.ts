import { StyleSheet } from "react-native";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";

export const styles = StyleSheet.create({
  listHeading: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.secondaryBlack,
  },
});
