"use client";
import { useRouter,useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CalendlyCustom from "../../../components/dashboard/CalendlyMeet";
import UploadImages from "../../../components/dashboard/UploadImage";
import EmplementQuestion from "../../../components/dashboard/EmplementQuestion";
import { QUESTIONS_DATA } from "@/utils/helper";

const Dashboard = () => {
  const router = useRouter();
  const params = useParams();
const {button} =params

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex min-h-screen w-full md:pl-[300px] relative">
      <div
        className={`flex flex-col py-10 px-5 bg-dusk-black z-10 text-white w-[300px] fixed top-0 left-0 min-h-screen justify-between max-md:w-full transition-all duration-300 ${
          open === true ? "max-md:left-0" : "max-md:-left-full"
        }`}
      >
        <div className="flex flex-col gap-2 relative">
          <h1 className="mb-3 text-4xl font-semibold text-start mt-3">Dashboard</h1>
          {QUESTIONS_DATA.map((item, index) => (
            <Link
              href={`/dashboard/${item.toLowerCase().replace(" ", "-")}`}
              key={index}
              onClick={() => setOpen(false)}
              className={`${
                button === item.toLowerCase().replace(" ", "-") &&
                "bg-white text-black"
              } py-2 px-3 rounded-lg cursor-pointer hover:bg-white hover:text-z-black transition-all duration-300`}
            >
              {item}
            </Link>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 duration-500 py-2 px-3 rounded-lg text-white"
        >
          Logout
        </button>
      </div>
      <div className="w-full pt-20 h-screen justify-center flex items-center hero">
        <div className="max-md:flex max-md:items-center max-md:gap-5 min-h-20 py-5 px-3 w-full fixed top-0 z-50">
          <button
            onClick={handleOpen}
            className="md:hidden max-md:size-6 relative !z-50 max-md:flex max-md:justify-between max-md:flex-col overflow-hidden"
          >
            <span
              className={`flex w-6 h-0.5 transition-all duration-300 bg-red-400 ${
                open === true ? "translate-x-10 bg-red-400" : ""
              }`}
            ></span>
            <span
              className={`flex w-6 h-0.5 transition-all duration-300 relative bg-gray after:absolute after:w-full after:h-full after:bg-red-400 after:left-0 after:top-0 after:transition-all after:duration-300 ${
                open === true ? "rotate-45 after:rotate-90 bg-red-400" : ""
              }`}
            ></span>
            <span
              className={`flex w-6 h-0.5 transition-all duration-300 bg-red-400 ${
                open === true ? "-translate-x-10 bg-red-400" : ""
              }`}
            ></span>
          </button>
        </div>
        {button === "button-1" ? (
          <EmplementQuestion />
        ) : button === "button-2" ? (
          <CalendlyCustom />
        ) : button === "button-3" ? (
          <UploadImages/>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
