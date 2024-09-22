import { DimensionValue } from "react-native";

export type T_DROPDOWN_ITEM = {
  key: string;
  value: string;
};

export type T_APP_DROPDOWN = {
  label?: string;
  placeholder?: string;
  name: string;
  control: any;
  errorText?: string;
  dropdownValues: T_DROPDOWN_ITEM[];
  width?: DimensionValue;
};
