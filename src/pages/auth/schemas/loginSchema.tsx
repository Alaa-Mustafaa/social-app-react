// Validations using ZOD - Default Values for the login form

import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email().nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export const LoginDefaultValues = {
  email: "",
  password: "",
};
