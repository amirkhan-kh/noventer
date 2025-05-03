import { footerTable } from '@/db'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import './_style.scss'
const Footer = () => {
  const t = useTranslations("Footer")
  return (
    <footer id='footer'>
      <div className="container mx-auto px-[70px] py-14 ">
        <h2 className="text-white text-center text-[40px] font-semibold leading-[100%]">{t("title")}</h2>
        <p className="text-white text-center text-[15px] font-light mb-9">{t("titleP")}</p>
        <div>
          <div className="flex  gap-6 w-full ">
            <div className='gradientt-border-btn w-[70%]'>
              <h3 className="text-white  text-[27px] font-semibold leading-[100%]">{t("formTable")}</h3>
              <div className="grid grid-cols-3 py-4 gap-x-10 gap-y-4">
                {footerTable.map((card, i)=> (
                  <div key={i} className='miniCard'>
                    <Image src={card.avatar} alt='Img Avatar' width={80} height={80}/>
                    <div>
                      <h4 className='text-[17px] font-bold leading-[120%]'>{card.lastName}</h4>
                      <p>{card.firstName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=' gradientt-border-btn  w-[25%] flex flex-col text-center py-9'>
              <span className='mb-7'></span>
              <h3 className="text-white  text-[23px] font-semibold leading-[130%]">{t("formFooterT")}</h3>
              <p className="text-white  text-[12px] font-semibold leading-[100%]">{t("formFooterD")}</p>
              <form action="" className='py-7 flex flex-col'>
                <input type="text" placeholder='Ismingiz' className='bg-[#ffffff68] text-white text-center py-1 text-[12px] rounded-sm my-2'/>
                <input type="text" placeholder='Telefon raqamingiz' className='bg-[#fff7] text-white text-center py-1 text-[12px] rounded-sm my-2'/>
                <button className="text-white bg-[#5A00DB] rounded-md px-3.5 py-3 mt-9">{t("IntroBtn")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
