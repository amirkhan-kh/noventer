import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "@/ui/button";
import pro2 from "../../../public/assets/images/projects2.png";
import pro3 from "../../../public/assets/images/project2.png";
import pro1 from "../../../public/assets/images/projects3.png";
import { RevalAboutContent, RevalAboutImg } from "@/ui/motion";
const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <div>
      <div className="container mx-auto py-20">
        <h2 className="text-white text-center text-[40px] font-semibold leading-[100%]">
          {t("title")}
        </h2>
        <p className="text-white text-center text-[15px] font-light">
          {t("titleP")}
        </p>
        <div className="px-1 lg:px-[70px] py-14 flex flex-col gap-14">
          <RevalAboutContent width="100%">
          <div className="flex flex-col lg:flex-row items-center  w-full  justify-between gap-2 md:gap-6">
            <Image src={pro1} width={550} height={330} alt="Img" className="rounded-lg"/>
            <div className="text-left sm:text-center lg:text-left w-full lg:w-[50%] py-2 md:py-10 px-4 lg:px-4">
              <h4 className="text-[20px] font-semibold leading-[100%] text-white mb-5">{t("card1T")}</h4>
              <p className="text-white text-[15px] leading-[120%] font-light mb-2.5">{t("card1D")}</p>
              <Button className="">{t("projectsBtn")}</Button>
            </div>
          </div>
          </RevalAboutContent>
          <RevalAboutImg width="100%">
          <div className="flex flex-col lg:flex-row items-center  w-full  justify-between gap-2 md:gap-6">
            <div className="text-left sm:text-center lg:text-left w-full lg:w-[50%] py-2 md:py-10 px-4 lg:px-4">
              <h4 className="text-[20px] font-semibold leading-[100%] text-white mb-5">{t("card2T")}</h4>
              <p className="text-white text-[15px] leading-[120%] font-light mb-2.5">{t("card2D")}</p>
              <Button className="">{t("projectsBtn")}</Button>
            </div>
            <Image src={pro2} width={550} height={330} alt="Img" className="rounded-lg" />
          </div>
          </RevalAboutImg>
          <RevalAboutContent width="100%">
          <div className="flex flex-col lg:flex-row items-center  w-full  justify-between gap-2 md:gap-6">
            <Image src={pro3} width={550} height={330} alt="Img" className="rounded-lg"/>
            <div className="text-left md:text-center lg:text-left w-full lg:w-[50%] py-2 md:py-10 px-4 lg:px-4">
              <h4 className="text-[20px] font-semibold leading-[100%] text-white mb-5">{t("card3T")}</h4>
              <p className="text-white text-[15px] leading-[120%] font-light mb-2.5">{t("card3D")}</p>
              <Button className="">{t("projectsBtn")}</Button>
            </div>
          </div>
          </RevalAboutContent>
        </div>
      </div>
    </div>
  );
};

export default Projects;
