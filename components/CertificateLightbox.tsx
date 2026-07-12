"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  image: string;
  title: string;
  institution: string;
  credentialId?: string;
  verifyHref: string;
}

export default function CertificateLightbox({
  open,
  onClose,
  image,
  title,
  institution,
  credentialId,
  verifyHref,
}: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-lightbox-title"
        >
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.3, 1] }}
            className="relative bg-surface w-full max-w-2xl max-h-[88vh] overflow-y-auto border border-border"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-surface border border-border font-mono text-[13px] text-ink hover:border-borderStrong"
            >
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={`${title} certificate`}
              className="w-full border-b border-border block"
            />
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 md:p-6">
              <div>
                <p id="cert-lightbox-title" className="font-medium text-ink">
                  {title}
                </p>
                <p className="text-[13px] text-muted mt-0.5">{institution}</p>
                {credentialId && (
                  <p className="font-mono text-[11px] text-muted mt-2 break-all">
                    ID: {credentialId}
                  </p>
                )}
              </div>
              {verifyHref && (
  <a
    href={verifyHref}
    target="_blank"
    rel="noopener noreferrer"
  >
    Verify on Credly ↗
  </a>
)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
