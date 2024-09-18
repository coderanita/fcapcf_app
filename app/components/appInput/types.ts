import { Control } from "react-hook-form";
import { TextInputProps } from "react-native";

export type T_APP_INPUT = {
  label?: string;
  placeholder?: string;
  name: string;
  isPassword?: boolean;
  control: any;
  errorText?: string;
  otherProps?: TextInputProps;
};
