"use client";

const CalendlyMeet = () => {
  const handelClick = () => {
    window.open("https://calendly.com/simmybishnoi29085?primary_color=800080", "_blank");
  };

  return (
    <div className="flex justify-center items-center py-12">
      <button
        onClick={handelClick}
        className="md:text-4xl text-xl bg-gray hover:bg-slate-400 duration-500 text-white font-bold md:py-5 py-3 md:px-8 px-6 mt-4 rounded-xl">
        Book a Meeting
      </button>
    </div>
  );
};

export default CalendlyMeet;