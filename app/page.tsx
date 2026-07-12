"use client";

import { LinkProvider } from "@/lib/SkillLinkContext";
import Rail from "@/components/Rail";
import ThemeToggle from "@/components/ThemeToggle";
import Start from "@/components/Start";
import Systems from "@/components/Systems";
import PullQuote from "@/components/PullQuote";
import Connects from "@/components/Connects";
import Record from "@/components/Record";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <LinkProvider>
      <a
        href="#start"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-bg focus:px-3 focus:py-2 font-mono text-[13px]"
      >
        Skip to content
      </a>
      <Rail />
      <ThemeToggle />
      <main className="pt-14 lg:pt-0">
        <Start />
        <Systems />
        <PullQuote />
        <Connects />
        <Record />
        <Contact />
      </main>
    </LinkProvider>
  );
}
