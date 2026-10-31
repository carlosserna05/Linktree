import { Fragment } from "react";
import { getActiveLinks } from "@/lib/links";
import { LinkButton } from "./LinkButton";

export function LinkList() {
  const links = getActiveLinks();

  return (
    <ul className="flex w-full flex-col gap-3.5">
      {links.map((link, i) => {
        const prev = links[i - 1];
        const startsGroup = link.group && link.group !== prev?.group;
        const endsGroup = !link.group && prev?.group;

        return (
          <Fragment key={link.id}>
            {startsGroup && (
              <li className="pt-1 text-center font-display text-xl uppercase tracking-wide text-[var(--accent)]">
                {link.group}
              </li>
            )}
            <li className={endsGroup ? "mt-3" : undefined}>
              <LinkButton link={link} />
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
}
