import { moderateScale } from "./responsive";

const FONT_FAMILY = "Inter";

const FONT_VARIANTS = {
  REGULAR: `${FONT_FAMILY}-Regular`,
  MEDIUM: `${FONT_FAMILY}-Medium`,
  SEMI_BOLD: `${FONT_FAMILY}-SemiBold`,
  BOLD: `${FONT_FAMILY}-Bold`,
};

export const appTypography = {
  REGULAR: {
    F_10: {
      fontSize: moderateScale(10),
      fontFamily: FONT_VARIANTS.REGULAR,
    },
    F_12: {
      fontSize: moderateScale(12),
      fontFamily: FONT_VARIANTS.REGULAR,
    },
    F_14: {
      fontSize: moderateScale(14),
      fontFamily: FONT_VARIANTS.REGULAR,
    },
    F_16: {
      fontSize: moderateScale(16),
      fontFamily: FONT_VARIANTS.REGULAR,
    },
    F_18: {
      fontSize: moderateScale(18),
      fontFamily: FONT_VARIANTS.REGULAR,
    },
    F_20: {
      fontSize: moderateScale(20),
      fontFamily: FONT_VARIANTS.REGULAR,
    },
    F_22: {
      fontSize: moderateScale(22),
      fontFamily: FONT_VARIANTS.REGULAR,
    },
    F_24: {
      fontSize: moderateScale(24),
      fontFamily: FONT_VARIANTS.REGULAR,
    },
  },
  MEDIUM: {
    F_10: {
      fontSize: moderateScale(10),
      fontFamily: FONT_VARIANTS.MEDIUM,
    },
    F_12: {
      fontSize: moderateScale(12),
      fontFamily: FONT_VARIANTS.MEDIUM,
    },
    F_14: {
      fontSize: moderateScale(14),
      fontFamily: FONT_VARIANTS.MEDIUM,
    },
    F_16: {
      fontSize: moderateScale(16),
      fontFamily: FONT_VARIANTS.MEDIUM,
    },
    F_18: {
      fontSize: moderateScale(18),
      fontFamily: FONT_VARIANTS.MEDIUM,
    },
    F_20: {
      fontSize: moderateScale(20),
      fontFamily: FONT_VARIANTS.MEDIUM,
    },
    F_22: {
      fontSize: moderateScale(22),
      fontFamily: FONT_VARIANTS.MEDIUM,
    },
    F_24: {
      fontSize: moderateScale(24),
      fontFamily: FONT_VARIANTS.MEDIUM,
    },
  },
  SEMI_BOLD: {
    F_10: {
      fontSize: moderateScale(10),
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
    },
    F_12: {
      fontSize: moderateScale(12),
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
    },
    F_14: {
      fontSize: moderateScale(14),
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
    },
    F_16: {
      fontSize: moderateScale(16),
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
    },
    F_18: {
      fontSize: moderateScale(18),
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
    },
    F_20: {
      fontSize: moderateScale(20),
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
    },
    F_22: {
      fontSize: moderateScale(22),
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
    },
    F_24: {
      fontSize: moderateScale(24),
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
    },
  },
  BOLD: {
    F_10: {
      fontSize: moderateScale(10),
      fontFamily: FONT_VARIANTS.BOLD,
    },
    F_12: {
      fontSize: moderateScale(12),
      fontFamily: FONT_VARIANTS.BOLD,
    },
    F_14: {
      fontSize: moderateScale(14),
      fontFamily: FONT_VARIANTS.BOLD,
    },
    F_16: {
      fontSize: moderateScale(16),
      fontFamily: FONT_VARIANTS.BOLD,
    },
    F_18: {
      fontSize: moderateScale(18),
      fontFamily: FONT_VARIANTS.BOLD,
    },
    F_20: {
      fontSize: moderateScale(20),
      fontFamily: FONT_VARIANTS.BOLD,
    },
    F_22: {
      fontSize: moderateScale(22),
      fontFamily: FONT_VARIANTS.BOLD,
    },
    F_24: {
      fontSize: moderateScale(24),
      fontFamily: FONT_VARIANTS.BOLD,
    },
  },
};
