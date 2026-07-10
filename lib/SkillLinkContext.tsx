"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { SkillId } from "./data";

interface LinkState {
  activeSkill: SkillId | null;
  toggleSkill: (id: SkillId) => void;
}

const LinkContext = createContext<LinkState | null>(null);

export function LinkProvider({ children }: { children: ReactNode }) {
  const [activeSkill, setActiveSkill] = useState<SkillId | null>(null);

  function toggleSkill(id: SkillId) {
    setActiveSkill((current) => (current === id ? null : id));
  }

  return (
    <LinkContext.Provider value={{ activeSkill, toggleSkill }}>
      {children}
    </LinkContext.Provider>
  );
}

export function useLink() {
  const ctx = useContext(LinkContext);
  if (!ctx) throw new Error("useLink must be used within LinkProvider");
  return ctx;
}
