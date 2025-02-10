"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("password", password);
  }, [password]);

  useEffect(() => {
    localStorage.setItem("remember", remember.toString());
  }, [remember]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!emailSyntax.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must have a minimum of 6 characters");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "/dashboard";

  };

  return (
    <div className="py-[30px] max-lg:pt-8 bg-levender">
    <div className="max-w-[1440px] mx-auto px-4 max-lg:px-[35px]">
      <div className="flex justify-between flex-wrap max-lg:justify-center">
        <div className="lg:pt-5">
          <Image
            src="/assets/images/webp/logo.webp"
            alt="page-logo"
            width={163}
            height={61.71}
            className="pointer-events-none pb-[138.9px] max-md:pb-[90px]"
          />
          <form onSubmit={handleSubmit} className="max-w-[456px]">
            <h2 className="font-semibold text-3xl leading-custom-2xl text-z-black">
              Welcome Back
            </h2>
            <p className="text-sm font-normal leading-custom-xl text-gray pb-[31px]">
              Welcome back! Please enter your details.
            </p>
            <div className="pb-[18px]">
              <label
                htmlFor="email"
                className="font-medium text-base leading-5 text-dusk-black pb-[6px]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="px-[14px] py-5 outline-none w-[456px] rounded-lg border border-silver-gray max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D] font-normal text-sm leading-6 placeholder:text-gray"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="font-medium text-base leading-5 text-dusk-black pb-[6px]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-[14px] py-5 outline-none w-[456px] rounded-lg border border-silver-gray max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D] font-normal text-sm leading-6 placeholder:text-gray"
              />
            </div>
            <div className="flex md:items-center justify-between pt-[18px] max-md:flex-col max-md:gap-[14px]">
              <label
                htmlFor="remember"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="text-custom-blue custom-checkbox size-5 !border-light-gray rounded-[6px]"
                />
                <span className="font-normal text-base font-inter text-dark-gray">
                  Remember for 30 days
                </span>
              </label>
              <p className="font-inter text-base font-normal text-blue">
                Forgot password
              </p>
            </div>
            {error && <p className="text-red-500 pt-6">{error}</p>}
            <button
              type="submit"
              className="pt-[9px] pb-[10px] font-medium text-white text-sm leading-6 bg-dusk-black bg-dark-black text-w hite w-full mt-6 hover:bg-green-600 transition-all duration-300 rounded-[9px]"
            >
              Sign In
            </button>
            <div className="pt-[11px] pb-3 bg-white w-full mt-[6px] rounded-[9px] border border-light-gray flex items-center gap-[10px] justify-center">
            <Image
                 src="/assets/images/svg/google-svg.svg" 
                 alt="google-icon"
                 width={22}
                 height={22}
                 className="mr-2"
               />
              <p className="text-sm font-medium text-dusk-black">Sign in with Google</p>
            </div>
            <p className="font-inter font-normal text-base text-gray md:text-center pt-[18px]">
              Don’t have an account?{" "}
              <span className="text-blue font-normal text-base"> Sign up</span>
            </p>
          </form>
        </div>
        <Image
          src="/assets/images/webp/main-image.webp"
          alt="hero-image"
          width={759}
          height={899}
          className="pointer-events-none max-lg:pt-24"
        />
      </div>
    </div>
  </div>
  );
};

export default Dashboard;