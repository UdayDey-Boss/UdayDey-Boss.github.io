"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const ease = [0.2, 0.7, 0.3, 1] as const;

export default function Start() {
  return (
    <section
      id="start"
      className="relative pt-28 pb-20 md:pt-40 md:pb-28 border-b border-border"
    >
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease }}
          className="font-mono text-[13px] tracking-wide text-muted mb-8"
        >
          01 — Start
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tight text-ink"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="mt-5 text-xl md:text-2xl text-muted max-w-xl"
            >
              {profile.role}, based in {profile.location}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease, delay: 0.22 }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[13px] text-muted"
            >
              <span>{profile.study}</span>
              <span className="text-border">/</span>
              <span className="inline-flex items-center gap-1.5 text-accentDeep">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {profile.status}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease, delay: 0.28 }}
              className="mt-8 text-base md:text-lg text-ink/80 max-w-xl leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease, delay: 0.34 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={profile.resumeHref}
                download
                className="inline-flex items-center justify-center rounded-sm border border-ink bg-ink px-5 py-3 font-mono text-[13px] text-bg transition-colors duration-200 hover:bg-ink/90"
              >
                Resume
              </a>
              <a
                href="#systems"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("systems")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-sm border border-border px-5 py-3 font-mono text-[13px] text-ink transition-colors duration-200 hover:border-borderStrong hover:bg-surface"
              >
                See the work ↓
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="justify-self-start lg:justify-self-end"
          >
            <div className="w-40 sm:w-48 border border-border overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Portrait of Uday Dey"
                width={320}
                height={320}
                className="w-full h-full object-cover grayscale-[15%]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
