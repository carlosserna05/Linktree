import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkList } from "@/components/LinkList";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-[var(--background)]">
      <main className="flex w-full max-w-md flex-1 flex-col items-center px-6 pb-16">
        <ProfileHeader />
        <LinkList />

        <footer className="mt-10 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} · Hecho con Next.js
        </footer>
      </main>
    </div>
  );
}
