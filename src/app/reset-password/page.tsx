"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { updatePassword, resetPassword } from "@/lib/auth/auth-helpers";
import { createClient } from "@/lib/supabase/client";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState<"request" | "reset">("request");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Check for hash fragments in the URL (Supabase sends these in email links)
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const hashParams = new URLSearchParams(hash.substring(1));
        const type = hashParams.get("type");
        const accessToken = hashParams.get("access_token");
        
        if (type === "recovery" && accessToken) {
          // User came from password reset email
          setStep("reset");
          
          // Extract and store the access token for password update
          // The session will be set automatically by Supabase client
          const supabase = createClient();
          supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: hashParams.get("refresh_token") || "",
          });
        }
      }
    }
    
    // Also check for reset parameter (from callback route)
    const resetParam = searchParams.get("reset");
    if (resetParam === "true") {
      setStep("reset");
    }
  }, [searchParams]);

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { error: resetError } = await resetPassword(formData.email);
      if (resetError) {
        setError(resetError.message);
      } else {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const { error: updateError } = await updatePassword(formData.password);
      if (updateError) {
        setError(updateError.message);
      } else {
        setSuccess(true);
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three dark:bg-dark mx-auto max-w-[500px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
                {step === "request" ? (
                  <>
                    <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                      Reset Password
                    </h3>
                    <p className="text-body-color mb-11 text-center text-base font-medium">
                      Enter your email address and we&apos;ll send you a link to reset your password.
                    </p>

                    {error && (
                      <div className="mb-6 rounded-xs bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                        {error}
                      </div>
                    )}

                    {success && (
                      <div className="mb-6 rounded-xs bg-green-50 p-4 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
                        Password reset email sent! Please check your inbox.
                      </div>
                    )}

                    <form onSubmit={handleRequestReset}>
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="text-dark mb-3 block text-sm dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Enter your Email"
                          required
                          className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        />
                      </div>
                      <div className="mb-6">
                        <button
                          type="submit"
                          disabled={loading}
                          className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? "Sending..." : "Send Reset Link"}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                      Set New Password
                    </h3>
                    <p className="text-body-color mb-11 text-center text-base font-medium">
                      Enter your new password below.
                    </p>

                    {error && (
                      <div className="mb-6 rounded-xs bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                        {error}
                      </div>
                    )}

                    {success && (
                      <div className="mb-6 rounded-xs bg-green-50 p-4 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400">
                        Password updated successfully! Redirecting to sign in...
                      </div>
                    )}

                    <form onSubmit={handleResetPassword}>
                      <div className="mb-8">
                        <label
                          htmlFor="password"
                          className="text-dark mb-3 block text-sm dark:text-white"
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                          placeholder="Enter your new password"
                          required
                          minLength={6}
                          className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        />
                      </div>
                      <div className="mb-8">
                        <label
                          htmlFor="confirmPassword"
                          className="text-dark mb-3 block text-sm dark:text-white"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder="Confirm your new password"
                          required
                          minLength={6}
                          className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        />
                      </div>
                      <div className="mb-6">
                        <button
                          type="submit"
                          disabled={loading}
                          className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? "Updating..." : "Update Password"}
                        </button>
                      </div>
                    </form>
                  </>
                )}
                <p className="text-body-color text-center text-base font-medium">
                  Remember your password?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
}

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
};

export default ResetPasswordPage;

