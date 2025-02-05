"use client";

import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

import { navLinks } from "@/lib/data";

export const Header = () => {
  const [isTransparent, setIsTransparent] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 50 ? setIsTransparent(true) : setIsTransparent(false)
    );
    return () => window.removeEventListener("scroll", () => null);
  }, []);

  return (
    <header
      className={twMerge(
        "fixed z-50 w-full transition-all duration-500",
        isTransparent ? "py-6 bg-white shadow-lg" : "py-8 bg-transparent"
      )}
    >
      <div className="container flex flex-col items-center lg:flex-row justify-between gap-y-6 lg:gap-y-0">
        <Link href="/">
          <Image
            src={
              isTransparent ? "/images/logo-dark.svg" : "/images/logo-white.svg"
            }
            alt="Logo"
            width={160}
            height={30}
            className="cursor-pointer"
          />
        </Link>
        <nav className={twMerge(isTransparent ? "text-primary" : "text-white")}>
          <ul className="flex items-center gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-base uppercase">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
