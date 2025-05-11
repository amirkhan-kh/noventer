import React from "react";
import { useTranslations } from "next-intl";
import { Reval, RevalAboutContent } from "@/ui/motion";
import { introMiniCardKeys } from "@/db";
import introImg from "../../../public/assets/images/introloptop.png";
import Image from "next/image";
import "./_style.scss";
const Intro = () => {
  const t = useTranslations("Intro");
  return (
    <div id="intro" className="bg-[#0E041D] w-full h-[850px]">
      <div className="container mx-auto px-0 sm:px-1 md:px-2.5 lg:px-[70px] ">
        <div className="flex-row justify-between h-[700px] w-full pt-[190px]">
          <div className="w-full pb-[30px] absolute z-10">
            <RevalAboutContent>
              <div className="text-[31px] sm:text-[26px] md:text-[30px] lg:text-[42px] font-bold w-[100%]">
                <span className="text-white">{t("IntroT1")}</span>
                <br />
                <span className="text-white font-light">{t("IntroT2")}</span>
                <br />
                <span className="text-[#5A00DB] font-semibold">
                  {t("IntroT3")}
                </span>
                <br />
                <span className="text-white">{t("IntroT4")}</span>
              </div>
            </RevalAboutContent>
            <button className="text-white bg-[#5A00DB] rounded-md px-3.5 py-3 mt-9">
              {t("IntroBtn")}
            </button>
          </div>
          <div className="">
            <Image
              src={introImg}
              alt="Intro Img"
              className="z-0 md:translate-x-[100px]  lg:translate-x-[300px] "
              width={900}
              height={950}
              id="imgIntro"
            />
          </div>
        </div>
        <Reval width="100%">
          <div className="grid grid-cols-4 w-full z-30 translate-y-[-0px]">
            {introMiniCardKeys.map((card, i) => (
              <div
                key={i}
                className="bg-[rgba(255,255,255,0.09)] hidden w-[140px] md:w-[170px] lg:w-[230px]  h-[100px] rounded-lg backdrop-blur-[3px] p-5 sm:flex items-center gap-0 sm:gap-3.5  sm:gradient-border-btn"
              >
                <Image src={card.icon.src} alt="icon" width={40} height={40} />
                <div>
                  <h3 className="text-white text-[20px] font-bold">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-white text-[15px] font-light">
                    {t(card.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reval>
      </div>
    </div>
  );
};

export default Intro;
