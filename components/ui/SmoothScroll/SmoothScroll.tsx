"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.5,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    lenis.on("scroll", (e) => {
      console.log("Lenis scrolling:", e.scroll);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    console.log("Lenis initialized:", lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
