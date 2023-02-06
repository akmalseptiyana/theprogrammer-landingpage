import { useState } from "react";
import clsx from "clsx";

import LogoIcon from "@/components/ui/icons/LogoIcon";
import PrimaryAnchorButton from "@/components/ui/button/PrimaryAnchorButton";
import MenuIcon from "@/components/ui/icons/MenuIcon";
import CloseIcon from "@/components/ui/icons/CloseIcon";

type NavigationLinksProps = {
  isMenuOpen?: boolean;
};

function NavigationLinks({ isMenuOpen }: NavigationLinksProps) {
  if (isMenuOpen) {
    return (
      <ul className="flex flex-col space-y-5 text-center">
        {links.map(({ href, name }) => {
          return (
            <li key={`${href}${name}`}>
              <a
                href={href}
                className="text-white/[.73] hover:text-white transition-colors"
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="hidden lg:flex items-center space-x-10">
      {links.map(({ href, name }) => {
        return (
          <li key={`${href}${name}`}>
            <a
              href={href}
              className="text-white/[.73] hover:text-white transition-colors"
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="mt-6">
      <div className="bg-[#3f4237]/20 max-w-[77.5rem] mx-auto">
        <nav className="h-20 flex items-center justify-between px-8 ">
          <LogoIcon />
          <NavigationLinks />
          <PrimaryAnchorButton href="sign-up" className="hidden lg:flex">
            sign up
          </PrimaryAnchorButton>

          {/* mobile */}
          <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </button>
          <div
            className={clsx(
              "w-4/6 h-screen flex flex-col items-center justify-center bg-[#1c2021] fixed top-0 transition-all ease-in duration-150 z-50 lg:hidden",
              isMenuOpen ? "right-0" : "-right-full"
            )}
          >
            <NavigationLinks isMenuOpen={isMenuOpen} />
            <PrimaryAnchorButton href="sign-up" className="absolute bottom-8">
              sign up
            </PrimaryAnchorButton>
            <button
              className="absolute top-5 right-5"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

type LinkItems = {
  href: string;
  name: string;
};

const links: LinkItems[] = [
  { href: "/how-it-works", name: "how it works?" },
  { href: "/develop", name: "develop" },
  { href: "/features", name: "features" },
  { href: "/docs", name: "docs" },
  { href: "/blog", name: "blog" },
  { href: "/about", name: "about" },
];
