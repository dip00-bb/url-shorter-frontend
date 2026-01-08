"use client"

import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to your API
    console.log({ name, email, password });
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
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2" style={{ color: "var(--primary)" }}>
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 rounded-lg outline-none"
            style={{
              backgroundColor: "var(--background-color)",
              border: "1px solid var(--surface-border)",
              color: "white",
            }}
          />
        </div>

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
          className="w-full py-3 rounded-lg font-semibold transition-all"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--background-color)",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
