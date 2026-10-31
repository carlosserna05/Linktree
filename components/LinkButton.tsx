"use client";

import { motion } from "framer-motion";
import type { LinkItem } from "@/data/links";
import { getLinkHref, trackLinkClick } from "@/lib/analytics";
import { LinkIconGlyph } from "./icons";

export function LinkButton({ link }: { link: LinkItem }) {
  const href = getLinkHref(link);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLinkClick(link)}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`relative flex w-full items-center justify-center rounded-full px-5 py-4 text-center text-[15px] font-bold transition-colors duration-200 sm:text-base ${
        link.highlighted
          ? "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)]"
          : "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface-hover)]"
      }`}
    >
      {link.icon && (
        <span className="absolute left-5 inline-flex shrink-0">
          <LinkIconGlyph name={link.icon} className="h-5 w-5" />
        </span>
      )}
      <span className="px-8">{link.title}</span>
    </motion.a>
  );
}
