import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { environment } from "../../../environments/environment";
import type { LoginFormData } from "../schemas/loginSchema";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Constants } from "../../../constants/constants";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation({
    mutationFn: (user: LoginFormData) =>
      axios.post(environment.apiUrl + "/users/signin", user),
    onSuccess: (res) => {
      const response = res.data.data;
      localStorage.setItem(Constants.TOKEN, response.token);
      localStorage.setItem(Constants.USER, JSON.stringify(response.user));
      toast.success("Logged in successfully!");
      navigate("/");
    },
  });

  const apiError = axios.isAxiosError(error)
    ? (error.response?.data?.message ?? "Something went wrong")
    : error
      ? "Something went wrong"
      : null;

  return { mutate, isPending, apiError };
}
