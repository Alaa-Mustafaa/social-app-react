import { Link } from "react-router";
import FormInput from "../../components/FormInput";  // Shared Component for Form input
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  defaultValuesForRegisterForm,
  registerSchema,
  type RegisterFormData,
} from "./schemas/registerSchema";  // Schema for Zod => Validations of the form
import ErrorMessage from "../../components/ErrorMessage"; // Shared component for error msg
import { useRegister } from "./hooks/RegisterHook";  // Our Hook for registeration
import { GENDER_OPTIONS } from "../../constants/constants";  // Gender options => male - female
import { REGISTER_FIELDS } from "./fields/RegisterFields"; // Our Fields of the form

export default function Register() {
  const { mutate, isPending, apiError } = useRegister();  // Our Hook for registeration

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValuesForRegisterForm, // Default Values for the form
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: RegisterFormData) {
    mutate(data); // Fire the hook of the registeration
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Create an account</h2>
      <p className="mt-1 text-sm text-slate-500">It's quick and easy.</p>
      <ErrorMessage message={apiError} />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        {REGISTER_FIELDS.map(({ controlName, ...field }) => (
          <FormInput
            key={controlName}
            id={controlName}
            error={errors[controlName]?.message}
            {...field}
            {...register(controlName)}
          />
        ))}

        <fieldset>
          <legend className="mb-1 text-sm font-medium text-slate-700">
            Gender
          </legend>
          <div className="grid grid-cols-2 gap-3">
            {GENDER_OPTIONS.map((gender) => (
              <label
                key={gender}
                className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-300 px-3 py-2 text-sm capitalize has-checked:border-blue-500 has-checked:bg-blue-50"
              >
                {gender}
                <input
                  type="radio"
                  value={gender}
                  className="accent-blue-600"
                  {...register("gender")}
                />
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-green-600 py-2.5 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Signing up..." : "Sign up"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
