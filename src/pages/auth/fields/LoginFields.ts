// Array of the login form fields to loop over it in the Login.tsx
import type { FieldConfig } from "./FieldConfig";
import type { LoginFormData } from "../schemas/loginSchema";

export const LOGIN_FIELDS: FieldConfig<keyof LoginFormData>[] = [
  {
    controlName: "email",
    label: "Email",
    type: "email",
    placeholder: "Alaa@example.com",
  },
  {
    controlName: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
  },
];
