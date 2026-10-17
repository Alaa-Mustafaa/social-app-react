import * as z from "zod";

export const registerSchema = z
  .object({
    name: z.string().nonempty("Fullname is required"),
    email: z.email().nonempty("Email is required"),
    password: z.string().nonempty("Password is required"),
    rePassword: z.string().nonempty("Confirm password is required"),
    dateOfBirth: z
      .string()
      .nonempty("Date Of Birth is required")
      .refine((value) => {
        const birthDate = new Date(value);
        const minAgeDate = new Date();
        minAgeDate.setFullYear(minAgeDate.getFullYear() - 16);
        return birthDate <= minAgeDate;
      }, "You must be at least 16 years old"),
    gender: z.enum(["female", "male"]),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Password and Confirm password must match",
    path: ["rePassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export const defaultValuesForRegisterForm = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
  dateOfBirth: "",
  gender: "male" as const,
};
