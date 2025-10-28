import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please complete all fields");
      return;
    }
    try {
      await signup({ name, email, password });
      nav("/dashboard");
    } catch (er) {
      setError(er?.message || "Failed to signup");
    }
  }

  return (
    <main className="container-max px-4 py-8">
      <div className="max-w-lg mx-auto bg-slate-800 rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-semibold">Create account</h2>
        <form
          className="mt-4 space-y-4"
          onSubmit={handleSubmit}
          aria-label="signup form"
        >
          <div>
            <label className="block text-sm text-slate-300">Name</label>
            <input
              className="input-default mt-1 bg-slate-900 text-slate-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="name"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300">Email</label>
            <input
              className="input-default mt-1 bg-slate-900 text-slate-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300">Password</label>
            <input
              type="password"
              className="input-default mt-1 bg-slate-900 text-slate-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="password"
            />
          </div>
          {error && <div className="text-sm text-red-400">{error}</div>}
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white">
              Create account
            </button>
            <Link
              to="/auth/login"
              className="text-sm text-slate-300 hover:underline"
            >
              Have an account?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
