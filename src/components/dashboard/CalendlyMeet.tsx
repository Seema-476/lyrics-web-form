"use client";
import { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

const CalendlyMeet = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setRootElement(document.body); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 container">
      {rootElement && ( 
        <PopupWidget
          url="https://calendly.com/simmybishnoi29085?primary_color=800080"
          rootElement={rootElement}
          text="Click here to schedule!"
        />
      )}
    </div>
  );
};

export default CalendlyMeet;