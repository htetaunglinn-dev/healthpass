"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

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
      <div className="fixed inset-0 -z-10 bg-ink/40" onClick={onClose}></div>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        className="relative max-h-[90vh] w-full max-w-[26rem] overflow-y-auto rounded-lg border border-line bg-surface shadow-[0_24px_48px_-16px_rgba(23,25,28,0.25)]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 cursor-pointer rounded-sm p-1 text-ink-subtle transition-colors hover:text-ink"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-7 pt-8 pb-7">
          {/* Header */}
          <h2 id="auth-title" className="font-display text-3xl tracking-tight text-ink">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h2>
          <p className="mt-1.5 text-sm text-ink-muted">
            {mode === "login"
              ? "Log in to see your appointments and records."
              : "Free to start. Upgrade when you want a coordinator."}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            {mode === "signup" && (
              <div>
                <label htmlFor="fullName" className="label">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="field"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="field"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label htmlFor="password" className="label">
                  Password
                </label>
                {mode === "login" && (
                  <button type="button" className="btn-quiet text-xs">
                    Forgot password?
                  </button>
                )}
              </div>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                value={formData.password}
                onChange={handleChange}
                required
                className="field"
              />
            </div>

            {mode === "signup" && (
              <div>
                <label htmlFor="confirmPassword" className="label">
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="field"
                />
              </div>
            )}

            {mode === "signup" && (
              <label className="flex cursor-pointer items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 cursor-pointer accent-accent"
                />
                <span className="text-xs leading-relaxed text-ink-muted">
                  I agree to the{" "}
                  <a href="#" className="text-ink underline underline-offset-2 hover:text-accent">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-ink underline underline-offset-2 hover:text-accent">
                    Privacy Policy
                  </a>
                </span>
              </label>
            )}

            <button type="submit" className="btn-primary w-full py-3">
              {mode === "login" ? "Log in" : "Create account"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-xs text-ink-subtle">
            <div className="h-px flex-1 bg-line" />
            or
            <div className="h-px flex-1 bg-line" />
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="btn-secondary">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
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
              Google
            </button>
            <button type="button" className="btn-secondary">
              <svg className="h-4 w-4" fill="#1877F2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Toggle Mode */}
        <div className="border-t border-line bg-paper px-7 py-4 text-center text-sm text-ink-muted">
          {mode === "login" ? (
            <>
              New to HealthPass?{" "}
              <button type="button" onClick={() => switchMode("signup")} className="btn-quiet">
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button type="button" onClick={() => switchMode("login")} className="btn-quiet">
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
