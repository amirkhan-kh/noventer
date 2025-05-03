import { aboutCardsData } from "@/db";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import './_style.scss'
import { Reval } from "@/ui/motion";
const About = () => {
  const t = useTranslations("AbaoutHome");
  return (
    <div>
      <div className="container mx-auto ">
        <div className="top bg-[#5A00DB] h-36 flex flex-col justify-center px-[70px]">
          <h2 className="text-[40px] font-semibold leading-[100%] text-white">{t("title")}</h2>
          <p className="text-[17px] font-light  text-white">{t("titleP")}</p>
        </div>
        <Reval width="100%">
        <div className="grid grid-cols-3 px-[70px] py-11 gap-8">
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
        <p className="text-white px-[70px] text-[15px] font-light">{t("about")}</p>
      </div>
    </div>
  );
};

export default About;
