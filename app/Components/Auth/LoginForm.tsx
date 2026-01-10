"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { useHandleLoginMutation } from "@/lib/features/api/apiSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useAuthContext from "../Hook/useAuthContext";

const LoginForm = () => {

  const router=useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthContext()


  const [handleLogin, { data, isError, isLoading, isSuccess, error }] = useHandleLoginMutation()


  useEffect(() => {
    if (isLoading) {
      toast.loading("Logging...", { id: "login" });
    }
    if (isSuccess && data) {
      toast.success("Logged in Successfully", { id: "login" });
      login(data);
      router.push('/')

    }
    if (isError) {
      toast.error("Something went wrong. Please try again.", { id: "login" });
    }
  }, [isLoading, isSuccess, isError, data, error, login,router]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await handleLogin({ email, password }).unwrap()

  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-lg shadow-lg"
        style={{ border: "1px solid var(--surface-border)" }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--primary)" }}>
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2" style={{ color: "var(--primary)" }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: "var(--background-color)",
              border: "1px solid var(--surface-border)",
              color: "white",
            }}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2" style={{ color: "var(--primary)" }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: "var(--background-color)",
              border: "1px solid var(--surface-border)",
              color: "white",
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold transition-all cursor-pointer"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--background-color)",
          }}
        >
          Login
        </button>

        <p className="mt-4 text-sm text-white text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register" style={{ color: "var(--primary)" }} className="underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
