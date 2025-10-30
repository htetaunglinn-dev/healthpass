"use client";

import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "login",
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Form submitted:", { mode, formData });
    // TODO: Implement actual authentication
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
    });
  };

  const switchMode = (newMode: "login" | "signup") => {
    setMode(newMode);
    resetForm();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 -z-10" onClick={onClose}></div>

      {/* Modal Container with scroll */}
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* Modal */}
        <div className="relative bg-white rounded-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header with Gradient */}
          <div className="bg-gradient-to-br from-[#0066cc] to-[#8b5cf6] px-6 py-6">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0066cc] font-bold text-xl">H+</span>
              </div>
              <span className="text-xl font-bold text-white">HealthPass</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              {mode === "login" ? "Welcome Back" : "Get Started Free"}
            </h2>
            <p className="text-blue-100 mt-1 text-sm">
              {mode === "login"
                ? "Sign in to access your healthcare dashboard"
                : "Create your account to start your health journey"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6">
            {/* Sign Up Fields */}
            {mode === "signup" && (
              <div className="mb-3">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition text-sm"
                  placeholder="John Doe"
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition text-sm"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition text-sm"
                placeholder="••••••••"
              />
            </div>

            {/* Confirm Password for Sign Up */}
            {mode === "signup" && (
              <div className="mb-3">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition text-sm"
                  placeholder="••••••••"
                />
              </div>
            )}

            {/* Forgot Password Link (Login Only) */}
            {mode === "login" && (
              <div className="flex justify-end mb-4">
                <button
                  type="button"
                  className="text-sm text-[#0066cc] hover:text-[#0052a3] font-medium transition cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Terms Agreement (Sign Up Only) */}
            {mode === "signup" && (
              <div className="mb-4">
                <label className="flex items-start space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-[#0066cc] border-gray-300 rounded focus:ring-[#0066cc] cursor-pointer"
                  />
                  <span className="text-xs text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#0066cc] hover:text-[#0052a3] font-medium cursor-pointer"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#0066cc] hover:text-[#0052a3] font-medium cursor-pointer"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-white py-2.5 rounded-lg font-semibold transition shadow-lg hover:shadow-xl cursor-pointer text-sm"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                type="button"
                className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  Google
                </span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  Facebook
                </span>
              </button>
            </div>

            {/* Toggle Mode */}
            <div className="text-center text-sm text-gray-600">
              {mode === "login" ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode("signup")}
                    className="text-[#0066cc] hover:text-[#0052a3] font-semibold transition cursor-pointer"
                  >
                    Sign up for free
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode("login")}
                    className="text-[#0066cc] hover:text-[#0052a3] font-semibold transition cursor-pointer"
                  >
                    Sign in
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
