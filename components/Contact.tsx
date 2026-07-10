"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const ease = [0.2, 0.7, 0.3, 1] as const;

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-page">
        <p className="font-mono text-[13px] tracking-wide text-muted mb-3">
          05 — Let&apos;s talk
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl mb-14"
        >
          Open to Software Engineering and Full-Stack roles, in Bangladesh or remote.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-l border-border">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, ease, delay: i * 0.04 }}
              className="group border-b border-r border-border p-5 md:p-6 flex flex-col justify-between gap-6 hover:bg-surface transition-colors duration-200"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {l.label}
              </span>
              <span className="text-[15px] text-ink break-words group-hover:text-accentDeep transition-colors duration-200">
                {l.value}
              </span>
            </motion.a>
          ))}
        </div>

        <p className="mt-8 font-mono text-[12.5px] text-muted">{profile.address}</p>

        <div className="mt-20 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 font-mono text-[11.5px] text-muted">
          <span>© {new Date().getFullYear()} Uday Dey</span>
          <span>Built with Next.js, TypeScript, Tailwind CSS, Framer Motion</span>
        </div>
      </div>
    </section>
  );
}
