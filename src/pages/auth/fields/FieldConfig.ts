// Shared shape of one input in a form's fields array (used by Login & Register)
import type { HTMLInputTypeAttribute } from "react";

export type FieldConfig<TName extends string> = {
  controlName: TName;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
};
