import Image from "next/image";
import { profile } from "@/data/links";

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center gap-4 px-6 pt-14 pb-8 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-[var(--accent)]/70 ring-offset-4 ring-offset-[var(--background)] shadow-[0_0_40px_-8px_var(--accent-glow)] sm:h-28 sm:w-28">
        <Image
          src={profile.avatarUrl}
          alt={profile.name}
          fill
          sizes="112px"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <h1 className="font-display text-3xl uppercase tracking-wide text-[var(--foreground)] sm:text-4xl">
          {profile.name}
        </h1>
        <p className="text-sm font-semibold text-[var(--accent)]">{profile.handle}</p>
      </div>
    </header>
  );
}
