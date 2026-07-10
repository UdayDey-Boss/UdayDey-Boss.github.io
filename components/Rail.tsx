"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useScroll } from "framer-motion";
import { sections } from "@/lib/data";

export default function Rail() {
  const [active, setActive] = useState(sections[0].id);
  const { scrollYProgress } = useScroll();

  const handleScroll = useCallback(() => {
    const viewportMarker = window.innerHeight * 0.35;
    let current = sections[0].id;
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= viewportMarker) current = s.id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  function jumpTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* Desktop — fixed vertical rail, left edge */}
      <nav
        aria-label="Section navigation"
        className="hidden lg:flex fixed left-0 top-0 h-full w-16 flex-col items-center justify-center z-40"
      >
        <div className="relative flex flex-col items-center gap-0">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />
          <motion.div
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-accent origin-top"
            style={{ scaleY: scrollYProgress, height: "100%" }}
          />
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => jumpTo(s.id)}
                aria-current={isActive ? "true" : undefined}
                aria-label={s.label}
                className="group relative flex items-center justify-center py-6 w-16"
              >
                <span
                  className={`relative z-10 block rounded-full transition-all duration-300 ease-system ${
                    isActive
                      ? "w-2.5 h-2.5 bg-accent"
                      : "w-1.5 h-1.5 bg-borderStrong group-hover:bg-muted"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-sm bg-ink px-2 py-1 font-mono text-[11px] text-bg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100`}
                >
                  {s.index} — {s.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile / tablet — fixed top strip */}
      <nav
        aria-label="Section navigation"
        className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-bg/90 backdrop-blur-sm border-b border-border"
      >
        <div className="relative flex items-center justify-between px-4 py-2.5">
          <div className="absolute left-4 right-4 bottom-0 h-px bg-border" />
          <motion.div
            className="absolute left-4 bottom-0 h-px bg-accent origin-left"
            style={{ scaleX: scrollYProgress, right: "1rem" }}
          />
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => jumpTo(s.id)}
                aria-current={isActive ? "true" : undefined}
                aria-label={s.label}
                className="relative z-10 flex flex-col items-center gap-1 px-1 py-1"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive ? "w-2 h-2 bg-accent" : "w-1.5 h-1.5 bg-borderStrong"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
