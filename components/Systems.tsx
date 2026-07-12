"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects, skillTiers } from "@/lib/data";
import { useLink } from "@/lib/SkillLinkContext";

const ease = [0.2, 0.7, 0.3, 1] as const;

const allSkills = skillTiers.flatMap((t) => t.skills);

export default function Systems() {
  const { activeSkill } = useLink();
  const activeSkillLabel = allSkills.find((s) => s.id === activeSkill)?.label;

  return (
    <section id="systems" className="py-20 md:py-28 border-b border-border bg-ink/[0.025]">
      <div className="container-page">
        <p className="font-mono text-[13px] tracking-wide text-muted mb-3">
          02 — Systems I&apos;ve built
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-xl mb-14 md:mb-16">
          Real software built to solve real problems.
        </h2>

        <div className="flex flex-col">
          {projects.map((p, i) => {
            const linked = activeSkill !== null && p.skillIds.includes(activeSkill);
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                className={`corner-marks relative border-t border-border py-10 md:py-12 pl-5 md:pl-8 pr-4 md:pr-6 transition-colors duration-300 ${
                  linked ? "bg-accentTint" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-10 md:top-12 bottom-10 md:bottom-12 w-[3px] transition-colors duration-300 ${
                    linked ? "bg-accent" : "bg-border"
                  }`}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6">
                  <div>
                    <span className="font-mono text-[12px] text-muted mr-3">
                      0{i + 1}
                    </span>
                    <span className="text-2xl md:text-[1.7rem] font-medium tracking-tight text-ink">
                      {p.name}
                    </span>
                  </div>
                  <p className="font-mono text-[12px] text-muted">{p.type}</p>
                </div>

                {linked && activeSkillLabel && (
                  <p className="font-mono text-[12px] text-accentDeep mb-5">
                    → uses {activeSkillLabel}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-14">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2">
                      The problem
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-ink">
                      {p.problem}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2">
                        What I built
                      </p>
                      <ul className="space-y-2">
                        {p.build.map((b, idx) => (
                          <li
                            key={idx}
                            className="text-[15px] leading-relaxed text-ink/85 flex gap-2"
                          >
                            <span className="text-muted">—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2">
                        How it holds up
                      </p>
                      <p className="text-[15px] leading-relaxed text-ink/85">{p.proof}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] text-muted border border-border px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                  {p.extraTags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-accentDeep border border-accent/30 bg-accentTint px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

               <a
  href={p.href}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-flex items-center gap-2 font-mono text-[13px] text-ink border-b border-ink/30 pb-0.5 transition-all duration-200 hover:border-ink hover:gap-3"
>
  <ExternalLink size={15} strokeWidth={2} />
  <span>
    {p.id === "developer-portfolio"
      ? "Explore Source Code ↗"
      : "View on GitHub ↗"}
  </span>
</a>
             </motion.article>
            );
          })}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
