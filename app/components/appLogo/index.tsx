import React from "react";
import { T_APP_LOGO } from "./types";
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { AppLogo1, LogoMark } from "../../../assets/images";

const AppLogo: React.FC<T_APP_LOGO> = () => {
  return <AppLogo1 width={horizontalScale(100)} height={verticalScale(100)} />;
};

export default AppLogo;
