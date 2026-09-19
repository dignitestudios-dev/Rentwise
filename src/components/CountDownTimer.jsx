import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const CountdownTimer = () => {
  // Fixed target date: May 25, 2025
  const targetDate = new Date("June 19, 2025 00:00:00");
 const { theme, setTheme } = useContext(GlobalContext);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const dest = targetDate.getTime();
      const diff = dest - now;

      if (diff <= 0) {
        clearInterval(interval);
        setIsExpired(true);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : `${days}`,
        hours: hours < 10 ? `0${hours}` : `${hours}`,
        minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center w-full gap-4 count-down-main">
      {["days", "hours", "minutes", "seconds"].map((unit, index) => (
        <div className="flex items-center gap-4" key={unit}>
          <div className="timer w-10 md:w-16">
            <div className={`${theme=="dark"?"bg-[#1E2234]":"bg-[#EEF1FF]"} py-4 px-2 rounded-lg overflow-hidden`}>
              <h3 className="font-semibold text-2xl text-[#2438D8] text-center">
                {timeLeft[unit]}
              </h3>
            </div>
            <p className={`text-xs md:text-sm capitalize font-medium ${theme=="dark"?"text-slate-300":"text-slate-600"} mt-1 text-center w-full`}>
              {unit}
            </p>
          </div>
          {index < 3 && (
            <h3 className="font-semibold mb-6 text-2xl text-[#2438D8]">:</h3>
          )}
        </div >
      ))}
    </div>
  );
};

export default CountdownTimer;
