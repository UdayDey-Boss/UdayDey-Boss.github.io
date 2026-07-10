"use client";

import { motion } from "framer-motion";
import { skillTiers, projects } from "@/lib/data";
import { useLink } from "@/lib/SkillLinkContext";

const ease = [0.2, 0.7, 0.3, 1] as const;

export default function Connects() {
  const { activeSkill, toggleSkill } = useLink();
  const selectedSkill = skillTiers
  .flatMap((tier) => tier.skills)
  .find((skill) => skill.id === activeSkill);

const relatedProjects = activeSkill
  ? projects.filter((project) => project.skillIds.includes(activeSkill))
  : [];

  return (
    <section id="connects" className="py-20 md:py-28 border-b border-border">
      <div className="container-page">
        <p className="font-mono text-[13px] tracking-wide text-muted mb-3">
          03 — How it connects
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-xl mb-3">
          These aren't technologies I've studied. They're technologies I've built with.
        </h2>
        <p className="text-[15px] text-muted mb-12 md:mb-14 max-w-md">
         Select any technology to reveal where it was applied.
        </p>

        <div className="flex flex-col">
          {skillTiers.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, ease, delay: i * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8 border-t border-border py-6 md:py-7 items-start"
            >
              <div>
                <p className="text-[15px] font-medium text-ink">{tier.tier}</p>
                <p className="font-mono text-[11px] text-muted">{tier.note}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tier.skills.map((skill) => {
                  const isActive = activeSkill === skill.id;
                  return (
                    <button
                      key={skill.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => toggleSkill(skill.id)}
                      className={`font-mono text-[12.5px] px-3 py-1.5 border transition-colors duration-200 ${
                       isActive
  ? "bg-ink text-bg border-ink scale-[1.03] shadow-sm"
                          : "border-border text-ink/80 hover:border-borderStrong hover:bg-surface"
                      }`}
                    >
                      {skill.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
          {selectedSkill && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className="mt-10 border border-border bg-surface p-6"
  >
    <p className="font-mono text-[12px] uppercase tracking-wider text-muted">
      Selected Skill
    </p>

    <h3 className="mt-2 text-2xl font-medium text-ink">
      {selectedSkill.label}
    </h3>

    {relatedProjects.length > 0 ? (
      <>
        <p className="mt-5 text-sm text-muted">
          Used in the following project{relatedProjects.length > 1 ? "s" : ""}:
        </p>

        <div className="mt-4 space-y-4">
          {relatedProjects.map((project) => (
            <div
              key={project.id}
              className="border-l-2 border-accent pl-4"
            >
              <p className="font-medium text-ink">
                {project.name}
              </p>

              <p className="text-sm text-muted">
                {project.type}
              </p>
            </div>
          ))}
        </div>
      </>
    ) : (
      <>
        <p className="mt-5 text-sm text-muted">
          This skill isn't used in a featured project yet.
        </p>

        <p className="mt-2 text-sm text-muted">
          It is currently being explored through coursework, practice, or future projects.
        </p>
      </>
    )}
  </motion.div>
)}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
