import { Link } from "react-router";
import FormInput from "../../components/FormInput";
import { LOGIN_FIELDS } from "./fields/LoginFields";
import { useForm } from "react-hook-form";
import {
  LoginDefaultValues,
  LoginSchema,
  type LoginFormData,
} from "./schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../../components/ErrorMessage";
import { useLogin } from "./hooks/LoginHook";

export default function Login() {
  const { mutate, isPending, apiError } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: LoginDefaultValues,
    resolver: zodResolver(LoginSchema),
  });

  function onLogin(data: LoginFormData) {
    mutate(data);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
      <p className="mt-1 text-sm text-slate-500">
        Log in to see what your friends are sharing.
      </p>
      <ErrorMessage message={apiError} />

      <form onSubmit={handleSubmit(onLogin)} className="mt-6 space-y-4">
        {LOGIN_FIELDS.map(({ controlName, ...field }) => (
          <FormInput
            key={controlName}
            id={controlName}
            error={errors[controlName]?.message}
            {...field}
            {...register(controlName)}
          />
        ))}

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Logging in..." : "Log in"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
