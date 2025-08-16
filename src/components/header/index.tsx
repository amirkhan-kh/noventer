"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import NavigationLink from "../NavigationLink";
import LocalSwitcherComponent from "../select-component";
import Button from "@/ui/button";
import "./_style.scss";

const Header = () => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="h-[99px] w-full flex items-center z-10 absolute">
      <div className="container mx-auto relative flex items-center justify-between px-1 md:px-2.5 lg:px-[70px]">
        <div className="flex items-center gap-1">
          <Image
            src="/assets/icons/Vector.svg"
            alt="Icon"
            width={22}
            height={28}
          />
          <h1 className="text-white font-light text-[29px] p-0 m-0 leading-none">
            <strong>Noventer</strong>
          </h1>
        </div>

        <nav>
          <ul className="hidden lg:flex items-center gap-3">
            <NavigationLink href="/">{t("navLink1")}</NavigationLink>
            <NavigationLink href="/portfolio">{t("navLink2")}</NavigationLink>
            <NavigationLink href="/service">{t("navLink3")}</NavigationLink>
            <NavigationLink href="/contact">{t("navLink4")}</NavigationLink>
          </ul>
        </nav>

        <nav
          className={`
            lg:hidden absolute right-0 top-[55px] z-50 w-[180px]
            transition-all duration-300 ease-in-out
            transform
            ${
              isOpen
                ? "opacity-100 translate-x-[-0px] pointer-events-auto"
                : "opacity-0 -translate-x-[-40px] pointer-events-none"
            }
          `}
        >
          <ul id="ultoggle" className="flex flex-col gap-3 rounded-sm p-4 shadow-lg">
            <NavigationLink href="/" onClick={() => setIsOpen(false)}>
              {t("navLink1")}
            </NavigationLink>
            <NavigationLink href="/portfolio" onClick={() => setIsOpen(false)}>
              {t("navLink2")}
            </NavigationLink>
            <NavigationLink href="/service" onClick={() => setIsOpen(false)}>
              {t("navLink3")}
            </NavigationLink>
            <NavigationLink href="/contact" onClick={() => setIsOpen(false)}>
              {t("navLink4")}
            </NavigationLink>
          </ul>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-1 lg:gap-4">
          <LocalSwitcherComponent />
          <Button className="hidden sm:block"><a href="https://crm-exam-2-project.vercel.app/">{t("navLinkBtn")}</a></Button>
          <button onClick={toggleMenu} className="ms-2.5 lg:hidden">
            <MdMenu color="white" size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
