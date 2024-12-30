import React from "react";
import Image from "next/image";
import logo from '@/public/images/logo.svg'
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src={logo}
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />

            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className="flex-between">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;