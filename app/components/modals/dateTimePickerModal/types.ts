import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { SetStateAction } from "react";

export type T_DATE_TIME_PICKER_MODAL = {
  visible?: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
  selectedDate: Date;
  onDateChange: (
    event: DateTimePickerEvent,
    currentDate: Date | undefined
  ) => void;
};
