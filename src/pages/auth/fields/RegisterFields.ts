// Array of the register form fields to loop over it in the Register.tsx
import type { FieldConfig } from "./FieldConfig";
import type { RegisterFormData } from "../schemas/registerSchema";

// gender is a radio group, so it's rendered separately and left out here
export const REGISTER_FIELDS: FieldConfig<
  Exclude<keyof RegisterFormData, "gender">
>[] = [
  { controlName: "name", label: "Full name", placeholder: "Alaa Mostafa" },
  {
    controlName: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    controlName: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
  },
  {
    controlName: "rePassword",
    label: "Confirm password",
    type: "password",
    placeholder: "••••••••",
  },
  { controlName: "dateOfBirth", label: "Date of birth", type: "date" },
];
