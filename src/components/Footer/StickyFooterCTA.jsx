"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/components/Common/Container";
import { Cross2Icon } from "@radix-ui/react-icons";
import Cookies from "js-cookie";

export function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

const StickyFooterCTA = ({ title, description, buttonText }) => {
  const [isVisible, setVisible] = useState(false);
  const [userClosed, setUserClosed] = useState(false);

  // Define the scrollListener inside useEffect or use useCallback
  useEffect(() => {
    const scrollListener = () => {
      const p = getScrollPercent();

      if (p > 18 && p < 85) {
        if (!userClosed) {
          setVisible(true);
        }
      } else {
        setVisible(false);
      }
    };

    const closed = Cookies.get("closed-signup") === "true";

    if (!closed) {
      window.addEventListener("scroll", scrollListener);
    } else {
      setUserClosed(true);
    }

    // Clean up function
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [userClosed]); // Re-attach the event listener if userClosed changes

  const closeStickyFooter = () => {
    setVisible(false);
    Cookies.set("closed-signup", "true", { expires: 365 });
    setUserClosed(true);
  };

  return (
    <div className="w-full flex justify-center relative ">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            // x:'50%',
            // originX:0.5,
            transition: { type: "spring", stiffness: 200, damping: 32 },
          },
          hidden: {
            opacity: 0,
            y: 100,
            // originX:0.5,
            // x:'50%',
            transition: { duration: 0.2 },
          },
        }}
        // className="fixed bottom-0 rounded-none md:bottom-4 max-w-3xl w-full px-5 py-4 h-auto md:rounded-2xl border border-black border-opacity-10 bg-[#2f62c7] z-[100]"
        className="fixed bottom-0 w-full md:bottom-3 bg-gradient-to-t shadow-md overflow- from-blue-50 border border-indigo-900/10 to-white md:w-[80%] md:max-w-[1120px] md:rounded-2xl h-auto z-[100]"
      >
        <img
          src={`/robo2.png`}
          className="w-[76px] md:w-[104px] drop-shadow-xl z-40 ml-4 md:ml-0 left-0 absolute bottom-0 -mb-[15px] md:-mb-[25px] -scale-x-100"
        />
        <Container maxWidth="max-w-[1320px] z-30 relative overflow-">
          <div
            onClick={closeStickyFooter}
            className="rounded-full cursor-pointer z-50 w-[22px] flex flex-col justify-center h-[22px] shadow-sm border border-gray-300 absolute top-0 bg-white right-0 -mt-[6px] -mr-[6px]"
          >
            <div className="mx-auto">
              <Cross2Icon width={14} />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full md:rounded-2xl overflow-hidden">
            <div className="relative w-full h-full overflow-hidden md:rounded-2xl">
              <div
                className=" absolute top-0 left-0 w-[110%] h-[110%] -mt-1 -ml-0.5 md:rounded-2xl"
                style={{
                  backgroundColor: "#ffffff",
                  opacity: "0.1",
                  backgroundImage:
                    "linear-gradient(#203490 1.5px, transparent 1.5px), linear-gradient(to right, #203490 1.5px, #ffffff 1.5px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>
          </div>

          <div className="w-full z-10 relative px-1 py-3  flex flex-col gap-4 md:gap-3 md:flex-row justify-between">
            <div className="hidden md:flex flex-row justify-center items-center gap-4 md:gap-4">
              <div></div>
              <div className="flex flex-col md:ml-[80px]">
                <h1 className="text-xl tracking-tight font-bold text-black/00">
                  {title ? title : `Become a member`}
                </h1>
                <p className="text-lg font-semibold max-w-md text-black/80">
                  {description
                    ? description
                    : `Get published, collect tools, and earn rewards.`}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};
export default StickyFooterCTA;
