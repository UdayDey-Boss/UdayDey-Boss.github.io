"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { records, languages } from "@/lib/data";
import CertificateLightbox from "./CertificateLightbox";

const ease = [0.2, 0.7, 0.3, 1] as const;

const kindLabel: Record<string, string> = {
  degree: "Degree",
  certificate: "Certificate",
  achievement: "Achievement",
};

export default function Record() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openRecord = records.find((r) => r.id === openId);

  return (
    <section id="record" className="py-20 md:py-28 border-b border-border">
      <div className="container-page">
        <p className="font-mono text-[13px] tracking-wide text-muted mb-3">
          04 — How I got here
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-xl mb-14 md:mb-16">
         Education, certifications, and milestones that shaped my journey.
        </h2>

        <div className="flex flex-col">
          {records.map((r, i) => {
            const isVerified = Boolean(r.verified);
            return (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, ease, delay: i * 0.03 }}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-1.5 md:gap-6 border-t border-border py-5 md:py-6 md:items-center"
              >
                <p className="font-mono text-[12.5px] text-muted">{r.period}</p>
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-wider text-muted mb-1">
                    {kindLabel[r.kind]}
                  </p>
                  <p className="text-[17px] font-semibold tracking-tight text-ink">
    {r.title}
</p>
                  <p className="text-[13.5px] text-muted mt-0.5">{r.institution}</p>
                </div>
                <div className="md:text-right">
                  {isVerified ? (
                    <button
                      type="button"
                      onClick={() => setOpenId(r.id)}
                      className="inline-flex items-center gap-1.5 font-mono text-[12px] text-accentDeep border border-accent/30 bg-accentTint px-3 py-1.5 hover:border-accent transition-colors duration-200"
                    >
                     View Credential ↗
                    </button>
                  ) : r.metric ? (
                   <p className="font-mono text-[12px] tracking-wide text-accentDeep">
  {r.metric}
</p>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
          <div className="border-t border-border" />
        </div>

       <div className="mt-12 border-t border-border pt-8">
  <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-5">
    Languages
  </p>

  <div className="flex flex-wrap gap-3">
    {languages.map((l) => (
      <div
        key={l.name}
        className="border border-border px-4 py-2"
      >
        <p className="text-sm font-medium">
          {l.name}
        </p>

        <p className="font-mono text-[11px] text-muted">
          {l.level}
        </p>
      </div>
    ))}
  </div>
</div>
      </div>

      {openRecord?.verified && (
        <CertificateLightbox
          open={Boolean(openId)}
          onClose={() => setOpenId(null)}
          image={openRecord.verified.image ?? ""}
          title={openRecord.title}
          institution={openRecord.institution}
          credentialId={openRecord.verified.credentialId}
          verifyHref={openRecord.verified.link}
        />
      )}
    </section>
  );
}
