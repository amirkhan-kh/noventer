import { serviceCardsData } from '@/db'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import './_style.scss'
const Service  = () => {
  const t = useTranslations("ServicesHome")
  return (
    <div id='service'>
      <div className="container mx-auto">
      <h2 className="text-white text-center text-[40px] font-semibold leading-[100%]">
          {t("title")}
        </h2>
        <p className="text-white text-center text-[15px] font-light">
          {t("titleP")}
        </p>
        <div className="px-3 lg:px-[70px] py-14 flex flex-col gap-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {serviceCardsData.map((card, i) =>(
              <div
              key={i}
              className="w-full sm:w-[300px] md:w-[240px] lg:w-[370px] h-[350px] lg:h-[380px] rounded-lg p-5 flex flex-col text-center justify-center items-center gap-3.5 gradientt-border-btn px-7 py-6"
            >
                <Image src={card.img} alt='Img service' width={70} height={70}/>
                <h4 className='text-[24px] font-semibold leading-[100%]'>{t(card.titleCard)}</h4>
                <p className='text-[15px] font-normal leading-[120%]'>{t(card.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service 
