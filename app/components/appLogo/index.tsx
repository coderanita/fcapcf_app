import React from "react";
import { T_APP_LOGO } from "./types";
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { LogoMark } from "../../../assets/images";

const AppLogo: React.FC<T_APP_LOGO> = () => {
  return <LogoMark width={horizontalScale(100)} height={verticalScale(94)} />;
};

export default AppLogo;
