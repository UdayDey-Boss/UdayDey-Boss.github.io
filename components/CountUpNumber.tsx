"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpNumberProps {
  value: number;
  decimals?: number;
  className?: string;
}

export default function CountUpNumber({
  value,
  decimals = 2,
  className,
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplay(value.toFixed(decimals));
      return;
    }

    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.2, 0.7, 0.3, 1],
      onUpdate(v) {
        setDisplay(v.toFixed(decimals));
      },
    });

    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
