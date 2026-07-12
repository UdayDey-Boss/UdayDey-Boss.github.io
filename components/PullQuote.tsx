"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0.7, 0.3, 1] as const;

export default function PullQuote() {
  return (
    <div className="py-16 md:py-24 border-b border-border">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink max-w-3xl leading-[1.15]"
        >
          Two different problems.{" "}
          <span className="text-muted">
            The same small set of tools, applied with discipline.
          </span>
        </motion.p>
      </div>
    </div>
  );
}
