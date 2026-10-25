import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";

import Header from "../components/Header/Header";

export default function DefaultLayout() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const main = mainRef.current;
    main?.querySelectorAll<HTMLElement>("[data-aos]").forEach((element) => {
      element.classList.remove("aos-animate");
    });
    if (main) {
      void main.offsetHeight;
    }

    let refreshFrame: number | null = null;
    const refreshAos = () => {
      if (refreshFrame !== null) {
        window.cancelAnimationFrame(refreshFrame);
      }

      refreshFrame = window.requestAnimationFrame(() => {
        AOS.refreshHard();
        refreshFrame = null;
      });
    };

    refreshAos();

    const resizeObserver = main ? new ResizeObserver(refreshAos) : null;
    if (main) {
      resizeObserver?.observe(main);
    }

    return () => {
      if (refreshFrame !== null) {
        window.cancelAnimationFrame(refreshFrame);
      }
      resizeObserver?.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] ">
      <Header />

      <main ref={mainRef} className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
