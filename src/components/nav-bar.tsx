"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  href: string;
  text: string;
  pathname: string;
  children: React.ReactNode;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, text, pathname, children }) => (
  <Link href={href} className="flex flex-col items-center gap-2">
    <span className={pathname === href ? "text-white" : "text-neutral-400"}>{text}</span>
    {children}
  </Link>
);

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-foreground fixed left-0 right-0 bottom-0">
      <section className="flex p-4 justify-between">
        <LinkItem href="/history" text="History" pathname={pathname}>
          <img src="/clock.svg" width={25} height={25} alt="Clock Icon" />
        </LinkItem>
        <LinkItem href="/" text="Start Workout" pathname={pathname}>
          <img src="/plus.svg" width={25} height={25} alt="Plus Icon" />
        </LinkItem>
        <LinkItem href="/exercises" text="Exercises" pathname={pathname}>
          <img src="/dumbbell.svg" width={43} height={25} alt="Dumbbell Icon" />
        </LinkItem>
      </section>
    </nav>
  );
};
