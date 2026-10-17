// Hook that is used to call the api of signup and return the response (Success & Error) , 
// If Success to navigate to login page.

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { environment } from "../../../environments/environment";
import type { RegisterFormData } from "../schemas/registerSchema";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useRegister() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation({
    mutationFn: (newData: RegisterFormData) =>
      axios.post(environment.apiUrl + "/users/signup", newData),
    onSuccess: () => {
      toast.success("Account created! Please log in.");
      navigate("/login");
    },
  });

  const apiError = axios.isAxiosError(error)
    ? (error.response?.data?.message ?? "Something went wrong")
    : error
      ? "Something went wrong"
      : null;
  return { mutate, isPending, apiError };
}
