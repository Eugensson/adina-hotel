import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-y-4">
        <Link href="/">
          <Image
            src="/images/logo-white.svg"
            alt="Logo"
            width={160}
            height={30}
            className="cursor-pointer mx-auto"
          />
        </Link>
        <p className="text-xs lg:text-sm text-center text-white/70">
          Copyright &copy; 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
