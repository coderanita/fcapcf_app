import React, { SetStateAction } from "react";
import { DimensionValue } from "react-native";

export type T_DATE_PICKER = {
  control: any;
  name: string;
  error?: string;
  label?: string;
  placeholder?: string;
  width?: DimensionValue;
};
