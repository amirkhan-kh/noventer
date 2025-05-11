import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { aboutCardsData } from "@/db";
import { Reval } from "@/ui/motion";
import './_style.scss'
const About = () => {
  const t = useTranslations("AbaoutHome");
  return (
    <div>
      <div className="container mx-auto ">
        <div className="top bg-[#5A00DB] h-36 flex flex-col justify-center px-1 sm:px-1.5 mx-2.5 md:px-4 lg:px-[70px]">
          <h2 className="text-[40px] font-semibold leading-[100%] text-white">{t("title")}</h2>
          <p className="text-[17px] font-light  text-white">{t("titleP")}</p>
        </div>
        <Reval width="100%" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 md:px-[10px] lg:px-[70px] py-11 md:gap-4 lg:gap-8">
          {aboutCardsData.map((card, i) => (
            <div key={i} className="gradient-border-btn overflow-hidden bg-[rgba(255,255,255,0.1)] backdrop-blur-md">
            <div className="rounded-[8px] overflow-hidden ">
              <Image
                src={card.img}
                width={420}
                height={370}
                alt="Img About"
                className="w-full h-auto block"
              />
            </div>
            <div className="py-2 px-7 ">
              <h3 className="text-white text-[18px] font-medium mb-2.5">
                {t(card.titleCard)}
              </h3>
              <p className="text-white text-[15px] font-light">
                {t(card.description)}
              </p>
            </div>
          </div>
          ))}
        </div>
        </Reval>
        <p className="text-white px-2 lg:px-[70px] text-[15px] font-light">{t("about")}</p>
      </div>
    </div>
  );
};

export default About;
