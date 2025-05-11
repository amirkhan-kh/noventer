import React from "react";
import { useTranslations } from "next-intl";
import Button from "@/ui/button";
import Image from "next/image";
import { serviceCard } from "@/db";
import avatar from "../../../../public/assets/icons/avatar.svg";
import icon from "../../../../public/assets/icons/file.png";
import "./_style.scss";

const namespaces = [
  "Servicecard",
  "Servicecard2",
  "Servicecard3",
  "Servicecard4",
  "Servicecard5",
  "Servicecard6",
  "Servicecard7",
  "Servicecard8",
] as const;

type NamespaceType = (typeof namespaces)[number];

const ServiceCard = () => {
  const tAll: Record<NamespaceType, ReturnType<typeof useTranslations>> = {
    Servicecard: useTranslations("Servicecard"),
    Servicecard2: useTranslations("Servicecard2"),
    Servicecard3: useTranslations("Servicecard3"),
    Servicecard4: useTranslations("Servicecard4"),
    Servicecard5: useTranslations("Servicecard5"),
    Servicecard6: useTranslations("Servicecard6"),
    Servicecard7: useTranslations("Servicecard7"),
    Servicecard8: useTranslations("Servicecard8"),
  };
  namespaces.forEach((ns) => {
    console.log("Using namespace:", ns);
  });

  return (
    <div id="ServiceCard" className="container mx-auto">
      <div className="px-4 lg:px-[70px]">
        {serviceCard.map((card, i) => {
          const t = tAll[card.namespace as NamespaceType];

          return (
            <div
              key={i}
              className="gradientt-border-btn my-16 relative h-[500px] sm:h-[230px] overflow-hidden  lg:h-full"
            >
              <div className="flex flex-col sm:flex-row justify-between w-full">
                <div className="w-full h-[300px] sm:h-[200px] sm:w-[80%] p-3 lg:p-14">
                  <h3 className="text-2xl lg:text-[34px] font-bold leading-8">
                    {t(card.leftTitle)}
                  </h3>
                  <div id="grid" className="grid grid-cols-3 sm:grid-cols-2 py-0 lg:py-3 gap-0 lg:gap-12">
                    <ul className="w-[175px] lg:w-[283px] h-[99px] pr-8">
                      <li className="text-[12px] lg:text-[20px] font-semibold leading-[200%] flex items-center gap-1">
                        <Image src={avatar} width={15} height={15} alt="icon" />
                        {t(card.grid1T)}
                      </li>
                      <li className="text-[9px] lg:text-[14px] font-normal leading-[130%]">
                        {t(card.grid1TP)}
                      </li>
                    </ul>
                    <ul className="w-[175px] lg:w-[283px] h-[99px] pr-8">
                      <li className="text-[12px] lg:text-[20px] font-semibold leading-[200%] flex items-center gap-1">
                        <Image src={avatar} width={15} height={15} alt="icon" />
                        {t(card.grid2T)}
                      </li>
                      <li className="text-[9px] lg:text-[14px] font-normal leading-[130%]">
                        {t(card.grid2TP)}
                      </li>
                    </ul>
                    <ul className="w-[175px] lg:w-[283px] h-[99px] pr-8 pb-7">
                      <li className="text-[12px] lg:text-[20px] font-semibold leading-[200%] flex items-center gap-1">
                        <Image src={avatar} width={15} height={15} alt="icon" />
                        {t(card.grid3T)}
                      </li>
                      <li className="text-[9px] lg:text-[14px] font-normal leading-[130%]">
                        {t(card.grid3TP)}
                      </li>
                    </ul>
                  </div>
                  <div className="pb-0 lg:pb-12">
                    <span className="text-[11px] lg:text-[14px] font-normal leading-[100%]">
                      {t(card.p1)}
                      <br />
                    </span>
                    <span className="text-[11px] lg:text-[15px] font-normal leading-[100%]">
                      {t(card.p2)}
                      <br />
                    </span>
                    <span className="text-[11px] lg:text-[14px] font-normal leading-[100%]">
                      {t(card.p3)}
                    </span>
                  </div>
                  <Button className="hidden sm:w-[170px]">{t(card.btn)}</Button>
                </div>
                <Image src={icon} width={0} height={0} className='absolute bottom-[-50px] left-[550px] w-[120px]' alt="icon" />
               <div className="w-full">
               <Image
                  src={card.images}
                  alt="serviceCard"
                  width={0}
                  height={0}
                  className="w-full h-full object-cover"
                />
               </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
