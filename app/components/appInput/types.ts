import { Control } from "react-hook-form";

export type T_APP_INPUT = {
  label?: string;
  placeholder?: string;
  inputName: string;
  control: Control<any> | undefined;
  errorText?: string;
  numbKeyBoardType?: boolean;
  hidePassword?: boolean;
};
