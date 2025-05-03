import { useTranslations } from "next-intl";
import React from "react";

const Intro = () => {
  const t = useTranslations("Service");
  return (
    <div className="bg-[#0E041D] w-full h-[800px] ">
      <div className="container mx-auto px-[70px]">
        <div className="absolute translate-y-[300px]">
          <div className="flex items-center">
            <div className="text-[42px] font-bold w-[100%]">
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
            <div className="relative">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
