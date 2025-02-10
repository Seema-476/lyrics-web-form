"use client";

const CalendlyMeet = () => {
  const handelClick = () => {
    window.open("https://calendly.com/simmybishnoi29085?primary_color=800080", "_blank");
  };

  return (
    <div className="flex justify-center items-center py-12">
      <button
        onClick={handelClick}
        className="hover:bg-blue-600 text-3xl bg-gray hover:bg-slate-400 duration-500 text-white font-bold py-4 px-8 mt-4 rounded-xl transition duration-300"
      >
        Book a Meeting
      </button>
    </div>
  );
};

export default CalendlyMeet;