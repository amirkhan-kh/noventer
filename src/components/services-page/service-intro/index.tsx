import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import intr1 from "../../../../public/assets/images/group-young-business-people-working-office 1.png";
import intr2 from "../../../../public/assets/images/image 3.png";
import intr3 from "../../../../public/assets/images/Xizmatlar page/image 4.png";
import "./_style.scss";
import { Reval } from "@/ui/motion";
const Intro = () => {
  const t = useTranslations("Service");
  return (
    <div id="servicePage" className=" w-full h-[800px]  bg-[#0E041D]">
      <div className="container mx-auto px-2 lg:px-[70px]">
        <div className="pt-[200px]">
          <div className="flex flex-col gap-20 md:flex-row  justify-between">
            <div className="order-2 md:order-1 w-full">
              <Reval width="100%">
                <div className="text-[34px] text-center sm:text-right md:text-left sm:text-[35px] md:text-[29px] lg:text-[40px] font-bold">
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
              </Reval>
            </div>
            <div className="order-1 md:order-2 pl-12 sm:pl-10 md:pl-0">
              <div id="miniCardParent" className="  w-[300px] sm:w-[400px] h-[200px] sm:h-[300px]">
                <div className="grid grid-cols-2 ">
                  <Image
                    id="img1"
                    src={intr2}
                    width={76}
                    height={76}
                    alt="Img"
                    className="rounded-lg"
                  />
                  <Image
                    id="img2"
                    src={intr3}
                    width={178}
                    height={178}
                    alt="img"
                    className="rounded-lg "
                  />
                  <Image
                    id="img3"
                    src={intr1}
                    width={90}
                    height={90}
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
