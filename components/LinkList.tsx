import { links } from "@/data/links";
import { LinkButton } from "./LinkButton";

export function LinkList() {
  const sortedLinks = [...links].sort((a, b) => a.order - b.order);

  return (
    <ul className="flex w-full flex-col gap-3.5">
      {sortedLinks.map((link) => (
        <li key={link.id}>
          <LinkButton link={link} />
        </li>
      ))}
    </ul>
  );
}
