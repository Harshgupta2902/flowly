"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SearchModal from "@/components/NavBar/SearchModal";

const Navbar = ({ maxWidth, navType }) => {
  const [isVisible, setVisible] = useState(false);
  const [blinkyOn, setBlinkyOn] = useState(false);
  const [hideOffTop, setHideOffTop] = useState(false);
  const prevScrollPos = useRef(
    typeof window !== "undefined" && window?.pageYOffset
  );

  useEffect(() => {
    setBlinkyOn(true);
    setTimeout(() => {
      setBlinkyOn(false);
    }, 1000);
  }, [isVisible]);

  useEffect(() => {
    const scrollListener = () => {
      const p = getScrollPercent(); // Assuming getScrollPercent is defined elsewhere

      if (p > 1 && isVisible !== true) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      //check if page is an article page (has url with /post/)
      if (window.location.pathname.includes("/post/")) {
        const currentScrollPos = window?.pageYOffset;

        if (currentScrollPos > 750 && !hideOffTop) {
          setHideOffTop(true);
        } else {
          setHideOffTop(false);
        }

        //check if user is scrolling upward direction
        if (prevScrollPos.current > currentScrollPos) {
          setHideOffTop(false);
        }
        prevScrollPos.current = currentScrollPos;
      }
    };

    window.addEventListener("scroll", scrollListener);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <nav
        id="main-nav"
        className={` fixed ${hideOffTop ? "-mt-20" : ""} top-0 ${
          navType == "full" ? "" : "md:top-2"
        }  w-full transition transition-all duration-1000`}
        style={{ zIndex: 99 }}
      >
        <div
          className={`w-full ${
            navType == "full"
              ? "bg-white border-b border-gray-200 "
              : `${
                  isVisible
                    ? "bg-white bg-opacity-[88%] shadow-sm md:w-[50rem] lg:w-[62rem]"
                    : "md:w-[97%] "
                }  md:rounded-2xl p-1`
          } transition transition-all duration-700 search-wide ${
            navType == "full"
              ? "max-w-full"
              : maxWidth
              ? maxWidth
              : "max-w-[1020px]"
          }  backdrop-blur-lg mx-auto p-1 px-1 pl-4`}
        >
          <div
            className={`${
              maxWidth ? maxWidth : "max-w-[1020px]"
            } mx-auto relative flex h-9 items-center justify-between`}
          >
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" as="/">
                <>
                  <img
                    className={`xl:hidden transition transition-all duration-1000 h-8 w-auto`}
                    src="/logo-small.svg"
                    alt="Prototypr Logo"
                  />
                  <img
                    className={`xl:block ${
                      isVisible
                        ? "w-[25px] object-left-top object-cover drop-shadow-md"
                        : "object-cover object-left-top w-[109px]"
                    } transition transition-all duration-1000 hidden h-7 w-auto `}
                    src={`/main-logo.svg`}
                    alt="Prototypr Logo"
                  />
                </>
              </Link>
              <div
                className={`${
                  blinkyOn ? "animate-pulse" : "opacity-0"
                } h-[28px] bg-gray-500/70 w-[2px]`}
              ></div>
            </div>
            <div className="">
              <SearchModal />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const getScrollPercent = () => {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
};
