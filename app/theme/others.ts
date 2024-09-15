import { moderateScale } from "./responsive";
import { T_RADIUS, T_SPACINGS } from "./types";

export const appSpacings: T_SPACINGS = {
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  48: 48,
};

export const appRadius: T_RADIUS = {
  4: moderateScale(4),
  8: moderateScale(8),
  12: moderateScale(12),
  16: moderateScale(16),
  20: moderateScale(20),
  24: moderateScale(24),
  28: moderateScale(28),
  32: moderateScale(32),
};
