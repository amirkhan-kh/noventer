import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import intr1 from "../../../../public/assets/images/group-young-business-people-working-office 1.png";
import intr2 from "../../../../public/assets/images/image 3.png";
import intr3 from "../../../../public/assets/images/Xizmatlar page/image 4.png";
import "./_style.scss";
const Intro = () => {
  const t = useTranslations("Service");
  return (
    <div id="servicePage" className="bg-[#0E041D] w-full h-[800px] ">
      <div className="container mx-auto px-[70px]">
        <div className="absolute translate-y-[300px] w-full">
          <div className="flex justify-between">
            <div className="text-[42px] font-bold ">
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
            <div className="w-[50%]">
              <div id="miniCardParent" className="">
                <div className="grid grid-cols-2 ">
                  <Image
                    id="img1"

                    src={intr2}
                    width={126}
                    height={126}
                    alt="Img"
                    className="rounded-lg"
                  />
                  <Image
                    id="img2"
                    src={intr3}
                    width={268}
                    height={268}
                    alt="img"
                    className="rounded-lg"
                  />
                  <Image
                    id="img3"
                    src={intr1}
                    width={140}
                    height={140}
                    alt="img"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
